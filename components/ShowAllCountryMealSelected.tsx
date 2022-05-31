import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { AppDispatch, RootState } from '../StateManageMent/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { MealIdSelect, setNewMealIdSelect } from '../StateManageMent/MealIdSelect';
import { setNationalSelectValue } from '../StateManageMent/NationalSelect';

function ShowAllCountryMealSelected() {
    const CategorySelect:string = useSelector<any,any>((state)=>state.National.value)
    const dispatch = useDispatch<AppDispatch>();

    function skeletonLoading(){
        let skeletonList = [] as JSX.Element[];
        for(let i = 0 ; i < 8 ; i++){
            skeletonList.push(
                <div key={`skeletonRecommend${i}`} className="w-[100px] md:w-[180px] lg:w-[250px] flex flex-col items-center justify-start rounded-xl shadow-lg animate-pulse">
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

    return (
        <AnimatePresence>

            {CategorySelect !== '-' &&
            <motion.div className="bg-slate-900 bg-opacity-75 w-screen h-screen fixed z-50 flex justify-center items-center"
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:0.5}}
                onClick={()=>{
                    dispatch(setNationalSelectValue('-'))
                }}
            >
                <motion.div className="bg-white px-8 py-5 flex flex-col justify-start items-start w-full max-w-[1000px] h-full max-h-[600px] rounded-2xl mt-10 mb-10 z-50" 
                    initial={{opacity:0 , y: 100}}
                    animate={{opacity:1 , y: 0 , scale:1}}
                    exit={{opacity:0 , scale:0}}
                    transition={{duration:0.5}}
                >
                <p className="font-semibold text-2xl text-gray-600">{CategorySelect}</p>
                <div className="flex jus"></div>
                
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
    )
}

export default ShowAllCountryMealSelected