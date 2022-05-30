import React, { useEffect, useState } from 'react'
import { countries, countriesType, getAllNation, getMealsByNation, getRecommendNationalMeals, mealsByNationType, recommendNationalMealsType } from '../pages/api/TheMealDB'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination , Autoplay } from "swiper";
import CircularProgress from '@mui/material/CircularProgress';
function RecommendNationalMeals() {

    const [ recommendNationMeals , setRecommendNationMeals ] = useState<recommendNationalMealsType[]|null>(null);
    
    useEffect(()=>{
        (async function() {
            let recommendNationalMealsResult =  await getRecommendNationalMeals();
            setRecommendNationMeals(recommendNationalMealsResult);
        }())
    },[])

    function truncate(str:string,n:number){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    function skeletonLoading(){
        let skeletonList = [] as JSX.Element[];
        for(let i = 0 ; i < 8 ; i++){
            skeletonList.push(
                <div key={`skeletonLatest${i}`} className="w-[250px] flex flex-col items-center justify-start rounded-xl shadow-lg animate-pulse">
                    <div className='h-[150px] w-full rounded-t-xl bg-[#cdcfd1]'></div>
                    <div className="flex flex-col w-full rounded-b-xl px-4 py-3 ">
                        <div className="w-[100px] h-[10px] bg-[#cbcdcf] rounded-full"></div>
                        <div className="px-3 w-[40px] h-[10px] bg-[#cbcdcf] rounded-full mt-3"></div>
                    </div>
                </div>
            );
        }

        return skeletonList;
    }

    function colorCategory(category:string){
        if(category === 'Beef'){
            return 'bg-orange-900';
        }
        if(category === 'Dessert'){
            return 'bg-[#ecac39]'
        }
        if(category === 'Side'){
            return 'bg-[#5b8722]';
        }
        if(category === 'Miscellaneous'){
            return 'bg-[#FFCC8F]'
        }
        if(category === 'Pork'){
            return 'bg-[#e596a2]'
        }
        if(category === 'Chicken'){
            return 'bg-[#d46800]'
        }
        if(category ==='Seafood'){
            return 'bg-[#7FB5FF]'
        }
        if(category === 'Vegetarian' || 'Vegan'){
            return 'bg-[#9ebe59]'
        }
        if(category === 'Goat'){
            return 'bg-[#d6cabe]'
        }
        if(category === 'Lamb'){
            return 'bg-[#7c373c]'
        }
    }

    function getFlagUrl(nation:string){
        let result =  countries.find(country=> country.name === nation) as countriesType;
        return result.flagImage
    }

    return (
        <div className="w-full max-w-[1100px] flex flex-col items-start justify-start mt-6 px-5 pt-5 shadow-md rounded-xl bg-white">
            <p className="font-semibold text-xl text-gray-600">Recommend National Meals</p>
            <div className="grid grid-cols-4 grid-flow-row-dense w-full gap-5 mt-4 py-4 border-t-[1px] border-gray-200 justify-items-center items-center">
            {recommendNationMeals &&
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
                    className="row-span-2 col-span-2 w-[520px] flex justify-center items-center justify-items-center"
                >
                    {recommendNationMeals.map((food)=>(
                        <SwiperSlide key={`bigNational${food.idMeal}`} className="w-full flex flex-col items-center justify-start rounded-xl shadow-lg relative">
                            <div className='h-[480px] w-full rounded-xl' style={{backgroundImage:`url(${food.strMealThumb})` , backgroundPosition:'center' , backgroundSize:'cover',backgroundRepeat:'no-repeat'}} ></div>
                            <div className="w-full h-[320px] bg-gradient-to-b from-transparent to-black absolute bottom-0 rounded-b-xl">
                                <p className="text-white font-semibold text-3xl mt-52 w-[400px] break-words mx-10">{food.strMeal}</p>
                            </div>
                            <img className="w-10 absolute bottom-8 right-8" src={getFlagUrl(food.strArea)} alt=""/>
                        </SwiperSlide>
                    ))
                    
                    }
                </Swiper>
            }
                {
                recommendNationMeals !== null ? recommendNationMeals.map((food , i)=>{
                    if(i==0){
                        return(
                            <div key={`national${food.idMeal}`} className="row-span-2 w-[250px] flex flex-col items-center justify-start rounded-xl shadow-lg relative">
                                <div className='h-[385px] w-full rounded-t-xl relative' style={{backgroundImage:`url(${food.strMealThumb})` , backgroundPosition:'center' , backgroundSize:'cover',backgroundRepeat:'no-repeat'}} >
                                    <div className="w-full h-[100px] bg-gradient-to-b from-transparent to-black absolute bottom-0"></div>
                                </div>
                                <div className="flex flex-col w-full rounded-b-xl px-4 py-3 gap-1 bg-black">
                                    <p className="font-semibold text-lg text-white w-full overflow-hidden whitespace-nowrap">{truncate(food.strMeal,25)}</p>
                                    <div className={`px-3 flex w-fit ${colorCategory(food.strCategory)} rounded-full my-2`}>
                                        <p className="text-sm text-white font-semibold">{food.strCategory}</p>
                                    </div>
                                </div>
                                <img className="w-10 absolute bottom-4 right-4" src={getFlagUrl(food.strArea)} alt=""/>
                            </div>
                        );
                    }
                    if(i == 6){
                        return(
                            <div key={`national${food.idMeal}`} className="col-span-2 col-start-3 w-[520px] flex flex-col items-end justify-start rounded-xl shadow-lg relative bg-black">
                                <div className='h-[225px] w-[450px] rounded-xl relative' style={{backgroundImage:`url(${food.strMealThumb})` , backgroundPosition:'center' , backgroundSize:'cover',backgroundRepeat:'no-repeat'}} >
                                    <div className="w-[220px] h-full bg-gradient-to-r from-black to-transparent absolute left-0 rounded-b-xl">
                                        
                                    </div>
                                </div>
                                <div className="flex flex-col w-full rounded-b-xl px-4 py-3 absolute left-2 bottom-0">
                                    <p className="font-semibold text-lg text-white w-full overflow-hidden whitespace-nowrap">{truncate(food.strMeal,25)}</p>
                                    <div className={`px-3 flex w-fit ${colorCategory(food.strCategory)} rounded-full mt-2`}>
                                        <p className="text-sm text-white font-semibold">{food.strCategory}</p>
                                    </div>
                                </div>
                                <img className="w-10 absolute bottom-1 right-3" src={getFlagUrl(food.strArea)} alt=""/>
                            </div>
                        );
                    }
                    return(
                        <div key={`national${food.idMeal}`} className="w-[250px] flex flex-col items-center justify-start rounded-xl shadow-lg relative">
                            <div className='h-[150px] w-full rounded-t-xl' style={{backgroundImage:`url(${food.strMealThumb})` , backgroundPosition:'center' , backgroundSize:'cover',backgroundRepeat:'no-repeat'}} ></div>
                            <div className="flex flex-col w-full rounded-b-xl px-4 py-3 ">
                                <p className="font-semibold text-gray-600 w-full overflow-hidden whitespace-nowrap">{truncate(food.strMeal,25)}</p>
                                <div className={`px-3 flex w-fit ${colorCategory(food.strCategory)} rounded-full mt-2`}>
                                    <p className="text-sm text-white font-semibold">{food.strCategory}</p>
                                </div>
                            </div>
                            <img className="w-8 absolute bottom-2 right-4" src={getFlagUrl(food.strArea)} alt=""/>
                        </div>
                    );
                }):
                skeletonLoading()
                
                }
            </div>
        </div>
    )
}

export default RecommendNationalMeals