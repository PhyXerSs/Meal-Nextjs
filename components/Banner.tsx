import React, { useEffect, useState } from 'react'
import { getRandomMeal, RandomMealResultType } from '../pages/api/TheMealDB';
import CircularProgress from '@mui/material/CircularProgress';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination , Autoplay } from "swiper";
import { setNewMealIdSelect } from '../StateManageMent/MealIdSelect';
import { AppDispatch, RootState } from '../StateManageMent/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export interface BannerMealType{
    idMeal:string,
    strMeal:string,
    strCategory:string,
    strArea:string,
    strInstructions:string,
    strMealThumb:string,
    strTags:string,
}

function Banner() {
    const [ bannerFood , setBannerFood ] = useState<BannerMealType[]|null>(null);
    const mealIdSelect:TypedUseSelectorHook<RootState> = useSelector<any,any>((state)=>state.MealId.value)
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        (async function(){
            let allFoodData = [] as BannerMealType[];
            for(let i = 0 ; i < 6 ; i++){
                let result = await getRandomMeal() as RandomMealResultType;
                let foodData = {} as BannerMealType;
                foodData.idMeal = result.meals[0].idMeal;
                foodData.strArea = result.meals[0].strArea;
                foodData.strCategory = result.meals[0].strCategory;
                foodData.strInstructions = result.meals[0].strInstructions;
                foodData.strMeal = result.meals[0].strMeal;
                foodData.strMealThumb = result.meals[0].strMealThumb;
                foodData.strTags = result.meals[0].strTags;
                allFoodData.push(foodData);
            }
            
            setBannerFood(allFoodData);
        }()); 
    },[])

    return (
        <div className="w-full h-[400px] bg-[#edf0f2] flex justify-center items-center">
            { bannerFood !== null ? 
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                effect={"fade"}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction:false,
                }}
                fadeEffect={{
                    crossFade: true
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade,Pagination,Autoplay]}
                className="h-full w-[1100px] flex justify-center items-center shadow-lg rounded-b-md"
            >
                {bannerFood.map((food,index)=>(
                    <SwiperSlide className='w-full h-full flex justify-start items-center relative bg-white' key={`banner${index}`}>
                        <div className="h-full w-[750px] relative banner" style={{backgroundImage:`url(${food.strMealThumb})`,backgroundPosition:'center' , backgroundSize:'cover'}}>
                            <div className="absolute right-0 top-0 bg-gradient-to-r from-transparent to-white h-full w-[300px]" ></div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[450px] gap-7 absolute right-2">
                            <p className=" font-semibold text-4xl text-gray-black mt-10 text-center">{food.strMeal}</p>
                            <button className="px-2 py-1 border-[2.5px] border-black font-semibold hover:bg-black hover:text-white ease-in duration-200"
                                onClick={()=>{
                                    dispatch(setNewMealIdSelect(food.idMeal))
                                }}
                            >More Info</button>
                        </div>
                    </SwiperSlide>
                ))
                }
            </Swiper>:
            <CircularProgress size={'100px'} sx={{ color:'orange'}}/>
            }

        
        </div>
    )
}

export default Banner