import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '../StateManageMent/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { MealIdSelect, setNewMealIdSelect } from '../StateManageMent/MealIdSelect';
import { setNationalSelectValue } from '../StateManageMent/NationalSelect';
import { getMealById, getMealsByNation, mealsByNationType } from '../pages/api/TheMealDB';


export interface ShowAllCountryMealSelectedType{
    idMeal:string,
    strMeal:string,
    strMealThumb:string,
    strCategory:string,
    strArea:string,
}

function ShowAllCountryMealSelected() {
    const NationalNameSelect = useSelector<any,any>((state)=>state.National.nationName)
    const NationalFlagSelect = useSelector<any,any>((state)=>state.National.flag)
    const dispatch = useDispatch<AppDispatch>();
    const [ foodData , setFoodData ] = useState<ShowAllCountryMealSelectedType[] | null>(null);

    function skeletonLoading(){
        let skeletonList = [] as JSX.Element[];
        for(let i = 0 ; i < 12 ; i++){
            skeletonList.push(
                <div key={`skeletonShowAllNationSelect${i}`} className="w-[100px] md:w-[180px] lg:w-[250px] h-fit flex flex-col items-center justify-start rounded-xl shadow-lg animate-pulse">
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
        return 'bg-[#ecac39]'
    }

    useEffect(()=>{
        if(NationalNameSelect !== '-'){
            (async function(){
                let result = await getMealsByNation(NationalNameSelect);
                let foodList = [] as ShowAllCountryMealSelectedType[];

                for(let i = 0 ; i < result.meals?.length ; i++){
                    let mealFullResult = await getMealById(result.meals[i]?.idMeal);
                    let food = {} as ShowAllCountryMealSelectedType;
                    food.idMeal = result.meals[i]?.idMeal;
                    food.strMeal = result.meals[i]?.strMeal;
                    food.strMealThumb = result.meals[i]?.strMealThumb;
                    food.strCategory = mealFullResult.meals[0].strCategory
                    food.strArea = mealFullResult.meals[0].strArea;
                    foodList.push(food);
                }
                setFoodData(foodList);
            }())
        }else{
            setFoodData(null);
        }
    },[NationalNameSelect])

    function truncate(str:string,n:number){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }


    return (
        <AnimatePresence>

            {NationalNameSelect !== '-' &&
            <motion.div className="bg-slate-900 bg-opacity-75 w-screen h-screen fixed z-50 flex justify-center items-center"
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:0.5}}
                onClick={()=>{
                    dispatch(setNationalSelectValue({
                        nationName:'-',
                        flag : '-'
                    }))
                }}
            >
                <motion.div className="bg-white px-8 py-5 flex flex-col justify-start items-start w-full max-w-[1150px] h-full max-h-[610px] rounded-2xl mt-10 mb-10 z-50 overscroll-none relative" 
                    initial={{opacity:0 , y: 100}}
                    animate={{opacity:1 , y: 0 , scale:1}}
                    exit={{opacity:0 , scale:0}}
                    transition={{duration:0.5}}
                    onClick={(e)=>{
                        e.stopPropagation();
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 absolute top-7 right-8 cursor-pointer hover:text-white hover:bg-gray-300 rounded-full duration-200 ease-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        onClick={()=>{
                            dispatch(setNationalSelectValue({
                                nationName:'-',
                                flag:'-',
                            }))
                        }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                
                    <div className='flex items-center mb-3 gap-3'>
                        <p className="font-semibold text-2xl text-gray-600">{NationalNameSelect}</p>
                        <img className="w-10" src={NationalFlagSelect} alt=""/>
                    </div>
                    
                    <div className="w-full grid grid-cols-4 max-w-[1150px] gap-x-4 gap-y-6 pb-5 pt-5 border-t-[1px] border-gray-200 overflow-auto h-full max-h-[600px] z-40" >
                    {
                        foodData !== null ? foodData.map((food)=>(
                            <div key={`ShowAllNationSelect${food.idMeal}`} className="max-w-[250px] max-h-[230px] w-full flex flex-col items-center justify-start rounded-xl shadow-lg cursor-pointer"
                                onClick={()=>{
                                    dispatch(setNewMealIdSelect(food.idMeal))
                                }}
                            >
                                <img src={food.strMealThumb} alt="" className='max-w-[250px] h-full max-h-[150px] w-full rounded-t-xl object-cover '/>
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
                
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
    )
}

export default ShowAllCountryMealSelected