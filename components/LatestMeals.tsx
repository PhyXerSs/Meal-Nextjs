import React, { useEffect, useRef, useState } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { getLatestMeals } from '../pages/api/TheMealDB'
import { AppDispatch, RootState } from '../StateManageMent/store';
import ModalLatestMeals from './ModalLatestMeals';
export interface latestMealType{
    idMeal:string,
    strCategory:string,
    strMeal:string,
    strMealThumb:string,
}

function LatestMeals() {
    const [ foodData , setFoodData ] = useState<latestMealType[]|null>(null);
    useEffect(()=>{
        (async function() {
            let result = await getLatestMeals();
            let latestMealList = [] as latestMealType[];
            result.forEach((food)=>{
                let latestMeal = {} as latestMealType;
                latestMeal.idMeal = food.data.meals[0].idMeal;
                latestMeal.strCategory = food.data.meals[0].strCategory;
                latestMeal.strMeal = food.data.meals[0].strMeal;
                latestMeal.strMealThumb = food.data.meals[0].strMealThumb;
                latestMealList.push(latestMeal);
            });
            setFoodData(latestMealList);
        }());
    },[])

    

    function skeletonLoading(){
        let skeletonList = [] as JSX.Element[];
        for(let i = 0 ; i < 8 ; i++){
            skeletonList.push(
                <div key={`skeletonLatest${i}`} className="w-[100px] md:w-[180px] lg:w-[250px] flex flex-col items-center justify-start rounded-xl shadow-lg animate-pulse">
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

    return (
        <div className="w-full max-w-[1100px] flex flex-col items-start justify-start mt-6 px-5 pt-5 shadow-md rounded-xl bg-white">
            <p className="font-semibold text-xl text-gray-600">Latest Meals</p>
            <div className="w-full grid grid-cols-4 gap-5 mt-4 py-4 border-t-[1px] border-gray-200 items-center justify-center justify-items-center">
                {
                foodData !== null ? foodData.map((food,index)=>(
                    <ModalLatestMeals food={food} index={index}/>
                )):
                skeletonLoading()
                
                }
            </div>
        </div>
    )
}

export default LatestMeals