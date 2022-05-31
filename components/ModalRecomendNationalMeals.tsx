import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { countries, countriesType, recommendNationalMealsType } from '../pages/api/TheMealDB';
import { setNewMealIdSelect } from '../StateManageMent/MealIdSelect';
import { AppDispatch } from '../StateManageMent/store';

function ModalRecomendNationalMeals({food , i} : {food:recommendNationalMealsType,i:number}) {
    const dispatch = useDispatch<AppDispatch>();
    const modalRef = useRef<HTMLDivElement>(null)
    function truncate(str:string,n:number){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
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

    function getFlagUrl(nation:string){
        let result =  countries.find(country=> country.name === nation) as countriesType;
        return result.flagImage
    }

    useEffect(()=>{
        (async function(){
            let durationReveal = 1000 + i%4 * 200;
            // let scaleReveal = 0.8 + i%4 * 0.3
            if (modalRef.current) {
                const sr = (await import("scrollreveal")).default
                sr().reveal(modalRef.current,{
                    distance: "0px",
                    origin: "top",
                    opacity:0,
                    scale: 1.2,
                    duration: durationReveal,
                    reset: true,
                })
            }
        }());
    },[])

    if(i==0){
        return(
            <div ref={modalRef} key={`national${food.idMeal}`} className="row-span-2 max-h-[500px] w-full h-full flex flex-col items-center justify-start rounded-xl shadow-lg relative overflow-hidden cursor-pointer"
                onClick={()=>{
                    dispatch(setNewMealIdSelect(food.idMeal))
                }}
            >
                <div className='w-full h-full rounded-t-xl relative' 
                    style={{backgroundImage:`url(${food.strMealThumb})` , backgroundPosition:'center' , backgroundSize:'cover',backgroundRepeat:'no-repeat'}} 
                >
                    <div className="w-full h-[100px] bg-gradient-to-b from-transparent to-black absolute bottom-0 "></div>
                </div>
                <div className="flex flex-col w-full rounded-b-xl px-4 py-3 gap-1 bg-black">
                    <p className="font-semibold text-lg text-white w-full overflow-hidden whitespace-nowrap">{truncate(food.strMeal,25)}</p>
                    <div className={`px-3 flex w-fit ${colorCategory(food.strCategory)} rounded-full my-2`}>
                        <p className="text-sm text-white font-semibold">{food.strCategory}</p>
                    </div>
                </div>
                <img className="w-6 md:w-10 absolute bottom-[330px] top-2 md:top-auto right-3 md:bottom-4 md:right-4" src={getFlagUrl(food.strArea)} alt=""/>
            </div>
        );
    }
    if(i == 6){
        return(
            <div ref={modalRef} key={`national${food.idMeal}`} className="col-span-2 col-start-3 max-w-[520px] h-full w-full flex flex-col items-end justify-start rounded-xl shadow-lg relative bg-black overflow-hidden cursor-pointer"
                onClick={()=>{
                    dispatch(setNewMealIdSelect(food.idMeal))
                }}
            >
                <div className='max-h-[225px] h-full max-w-[450px] w-full rounded-xl relative' style={{backgroundImage:`url(${food.strMealThumb})` , backgroundPosition:'center' , backgroundSize:'cover',backgroundRepeat:'no-repeat'}} >
                    <div className="w-[220px] h-full bg-gradient-to-r from-black to-transparent absolute left-0 rounded-b-xl rounded-t-xl">
                        
                    </div>
                </div>
                <div className="flex flex-col w-full rounded-b-xl px-4 py-3 absolute left-2 bottom-0">
                    <p className="font-semibold text-lg text-white w-full overflow-hidden whitespace-nowrap">{truncate(food.strMeal,25)}</p>
                    <div className={`px-3 flex w-fit ${colorCategory(food.strCategory)} rounded-full mt-2`}>
                        <p className="text-sm text-white font-semibold">{food.strCategory}</p>
                    </div>
                </div>
                <img className="w-6 md:w-10 absolute top-2 md:top-auto md:bottom-1 right-3" src={getFlagUrl(food.strArea)} alt=""/>
            </div>
        );
    }
    return(
        <div ref={modalRef} key={`national${food.idMeal}`} className="max-w-[250px] w-full flex flex-col items-center justify-start rounded-xl shadow-lg relative overflow-hidden cursor-pointer"
            onClick={()=>{
                dispatch(setNewMealIdSelect(food.idMeal))
            }}
        >
            {/* <div className='h-[150px] w-full rounded-t-xl' style={{backgroundImage:`url(${food.strMealThumb})` , backgroundPosition:'center' , backgroundSize:'cover',backgroundRepeat:'no-repeat'}} ></div> */}
            <img src={food.strMealThumb} alt="" className="h-full max-h-[150px] max-w-[250px] w-full object-cover rounded-t-xl" />
            <div className="flex flex-col w-full rounded-b-xl px-4 py-3 ">
                <p className="font-semibold text-gray-600 w-full overflow-hidden whitespace-nowrap">{truncate(food.strMeal,25)}</p>
                <div className={`px-3 flex w-fit ${colorCategory(food.strCategory)} rounded-full mt-2`}>
                    <p className="text-sm text-white font-semibold">{food.strCategory}</p>
                </div>
            </div>
            <img className="w-5 md:w-8 absolute bottom-36 top-2 right-3 md:top-auto  md:bottom-2 md:right-4" src={getFlagUrl(food.strArea)} alt=""/>
        </div>
    );
}

export default ModalRecomendNationalMeals