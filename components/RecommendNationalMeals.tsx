import React, { useEffect, useRef, useState } from 'react'
import { countries, countriesType, getAllNation, getMealsByNation, getRecommendNationalMeals, mealsByNationType, recommendNationalMealsType } from '../pages/api/TheMealDB'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { EffectCreative , Pagination , Autoplay } from "swiper";
import CircularProgress from '@mui/material/CircularProgress';
import { setNewMealIdSelect } from '../StateManageMent/MealIdSelect';
import { AppDispatch, RootState } from '../StateManageMent/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import ModalRecomendNationalMeals from './ModalRecomendNationalMeals';
function RecommendNationalMeals() {

    const [ recommendNationMeals , setRecommendNationMeals ] = useState<recommendNationalMealsType[]|null>(null);
    const mealIdSelect:TypedUseSelectorHook<RootState> = useSelector<any,any>((state)=>state.MealId.value)
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        (async function() {
            let recommendNationalMealsResult =  await getRecommendNationalMeals();
            setRecommendNationMeals(recommendNationalMealsResult);
        }());
    },[])

    function skeletonLoading(){
        let skeletonList = [] as JSX.Element[];
        for(let i = 0 ; i < 8 ; i++){
            skeletonList.push(
                <div key={`skeletonRecommend${i}`} className="w-[100px] md:w-[180px] lg:w-[250px] h-fit flex flex-col items-center justify-start rounded-xl shadow-lg animate-pulse">
                    <div className=' w-[100px] h-[80px] md:w-[180px] md:h-[100px] lg:w-[250px] lg:h-[150px] rounded-t-xl bg-[#cdcfd1]'></div>
                    <div className="flex flex-col w-full rounded-b-xl px-4 py-3 ">
                        <div className="w-[50px] md:w-[100px] h-[10px] bg-[#cbcdcf] rounded-full"></div>
                        <div className="px-3 w-[20px] md:w-[40px] h-[10px] bg-[#cbcdcf] rounded-full mt-3"></div>
                    </div>
                </div>
            );
        }
        return skeletonList;
    }

    function getFlagUrl(nation:string){
        let result =  countries.find(country=> country.name === nation) as countriesType;
        return result.flagImage
    }

    return (
        <div className="w-full max-w-[1100px] flex flex-col items-start justify-start mt-6 px-5 pt-5 shadow-md rounded-xl bg-white">
            <p className="font-semibold text-xl text-gray-600">Recommend National Meals</p>
            <div className="grid grid-cols-4 grid-flow-row-dense w-full gap-5 mt-4 py-4 border-t-[1px] border-gray-200 justify-items-start">
            {recommendNationMeals &&
                <Swiper
                    slidesPerView={1}
                    slidesPerGroup={1}
                    effect={"creative"}
                    creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -600],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction:false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectCreative , Pagination,Autoplay]}
                    className="row-span-2 col-span-2 w-full max-w-[520px] flex justify-center items-center justify-items-center rounded-xl"
                >
                    {recommendNationMeals.map((food)=>(
                        <SwiperSlide key={`bigNational${food.idMeal}`} className="w-full flex flex-col items-center justify-start rounded-xl shadow-lg relative cursor-pointer"
                            onClick={()=>{
                                dispatch(setNewMealIdSelect(food.idMeal))
                            }}
                        >
                            {/* <div className='h-[480px] w-full rounded-xl' style={{backgroundImage:`url(${food.strMealThumb})` , backgroundPosition:'center' , backgroundSize:'cover',backgroundRepeat:'no-repeat'}} ></div> */}
                            <img src={food.strMealThumb} alt="" className='max-h-[480px] h-full w-full rounded-xl object-cover' />
                            <div className="w-full h-[320px] bg-gradient-to-b from-transparent to-black absolute bottom-0 rounded-b-xl">
                                <p className="text-white font-semibold text-3xl mt-52 w-[400px] break-words mx-10">{food.strMeal}</p>
                            </div>
                            <img className="w-6 md:w-10 absolute bottom-[330px] top-2 right-3 md:top-auto md:bottom-8 md:right-8" src={getFlagUrl(food.strArea)} alt=""/>
                        </SwiperSlide>
                    ))
                    
                    }
                </Swiper>
            }
                {
                recommendNationMeals !== null ? recommendNationMeals.map((food , i)=>
                    <ModalRecomendNationalMeals food={food} i={i}/>
                ):
                skeletonLoading()
                
                }
            </div>
        </div>
    )
}

export default RecommendNationalMeals