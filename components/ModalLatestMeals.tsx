import React, { useEffect, useRef } from 'react'
import { latestMealType } from './LatestMeals';
import { setNewMealIdSelect } from '../StateManageMent/MealIdSelect';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../StateManageMent/store';

function ModalLatestMeals({food , index}:{food:latestMealType , index:number}) {
    const dispatch = useDispatch<AppDispatch>();
    const modalRef = useRef<HTMLDivElement>(null)
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

    function truncate(str:string,n:number){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    useEffect(()=>{
        (async function(){
            let durationReveal = 1000 + index%4* 500;
            if (modalRef.current) {
                const sr = (await import("scrollreveal")).default
                sr().reveal(modalRef.current,{
                    distance: "0px",
                    origin: "top",
                    opacity:0,
                    scale: 0.5,
                    duration: durationReveal,
                    reset: true,
                })
            }
        }());
    },[])

    return (
        <div ref={modalRef} key={`latest${food.idMeal}`} className="max-w-[250px] w-full flex flex-col items-center justify-start rounded-xl shadow-lg cursor-pointer"
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
    )
}

export default ModalLatestMeals