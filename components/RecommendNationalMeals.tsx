import React, { useEffect, useState } from 'react'
import { getAllNation, getMealsByNation, getRecommendNationalMeals, mealsByNationType, recommendNationalMealsType } from '../pages/api/TheMealDB'

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
        if(category === 'Vegetarian'){
            return 'bg-[#9ebe59]'
        }
        if(category === 'Goat'){
            return 'bg-[#d6cabe]'
        }
        if(category === 'Lamb'){
            return 'bg-[#7c373c]'
        }
    }

    return (
        <div className="w-full max-w-[1100px] flex flex-col items-start justify-start mt-6 px-5 pt-5 shadow-md rounded-xl bg-white">
            <p className="font-semibold text-xl text-gray-600">Recommend National Meals</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 mt-4 py-4 border-t-[1px] border-gray-200">
                {
                recommendNationMeals !== null ? recommendNationMeals.map((food)=>(
                    <div key={`latest${food.idMeal}`} className="w-[250px] flex flex-col items-center justify-start rounded-xl shadow-lg">
                        <div className='h-[150px] w-full rounded-t-xl' style={{backgroundImage:`url(${food.strMealThumb})` , backgroundPosition:'center' , backgroundSize:'cover',backgroundRepeat:'no-repeat'}} ></div>
                        <div className="flex flex-col w-full rounded-b-xl px-4 py-3 ">
                            <p className="font-semibold text-gray-600 w-full overflow-hidden whitespace-nowrap">{truncate(food.strMeal,25)}</p>
                            <div className={`px-3 flex w-fit ${colorCategory(food.strCategory)} rounded-full mt-2`}>
                                <p className="text-sm text-white font-semibold">{food.strCategory}</p>
                            </div>
                        </div>
                    </div>
                )):
                skeletonLoading()
                
                }
            </div>
        </div>
    )
}

export default RecommendNationalMeals