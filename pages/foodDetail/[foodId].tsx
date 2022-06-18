import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { getMealById, getMealByIdResultType } from '../api/TheMealDB';
import { motion } from 'framer-motion';
export interface ingredientType{
    name:string,
    picture:string,
    amount:string,
}

function Details() {
    const router = useRouter();
    const { foodId }= router.query as {foodId:string};
    const [ foodData , setFoodData ] = useState<getMealByIdResultType|null>(null);
    const [ ingredientList , setIngredientList ] = useState<ingredientType[]>([]);
    const [isReadMoreClick , setIsReadMoreClick] = useState<boolean>(false);
    useEffect(()=>{
      (async function() {
        let result = await getMealById(foodId);
        setFoodData(result)
      }())
      
    },[foodId])
    
    useEffect(()=>{
      
        let ingredients = [] as ingredientType[];
        for(let i = 1 ; i <= 20 ; i++){
          if(foodData?.meals[0] ){
            let ingredient = {} as ingredientType;
            let meal = foodData?.meals[0] as any;
            if(meal[`strIngredient${i}`] !== '' && meal[`strIngredient${i}`] !== null && meal[`strMeasure${i}`] !== '' && meal[`strMeasure${i}`] !== null){
              ingredient.name = meal[`strIngredient${i}`];
              ingredient.picture = `https://www.themealdb.com/images/ingredients/${meal[`strIngredient${i}`]}.png`;
              ingredient.amount = meal[`strMeasure${i}`]
              ingredients.push(ingredient);
            }
          }
        }
        setIngredientList(ingredients);
      
    },[foodData])

    function truncate(str:string|undefined,n:number){
      if(str!==undefined)
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
      return <></>
    }

    // console.log(ingredientList);
    
    return (
      foodData && 
      <div className="w-full min-h-screen flex justify-center items-start bg-[#e8ecf4]">
        
        <motion.div className="mt-[110px] w-fit flex flex-wrap justify-around items-start p-10 rounded-[50px] bg-[#eff0f0] shadow-lg gap-16"
          initial={{y:-200 ,opacity:0}}
          animate={{y:0 , opacity:1}}
          transition={{duration:0.5}}
        >
          <div className="flex flex-col items-start w-[460px] gap-10">
            <div className="flex flex-col max-w-[450px] justify-start items-start gap-4">
              <motion.div className="flex justify-start items-center"
               initial={{x:-1000 ,opacity:0}}
               animate={{x:0 , opacity:1}}
               transition={{duration:0.8}}
              >
                <p className="text-4xl">Delicious {foodData?.meals[0]?.strCategory}</p>
              </motion.div>
              <motion.p className="max-w-[450px] font-bold text-4xl text-orange-900"
                initial={{x:-1000 ,opacity:0}}
                animate={{x:0 , opacity:1}}
                transition={{duration:1.1}}
              >
                {foodData?.meals[0]?.strMeal}
              </motion.p>
            </div>
            <motion.img className="rounded-[40px] w-full" src={foodData?.meals[0]?.strMealThumb} alt=""
              style={{boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}
              initial={{opacity:0 , scale:0}}
              animate={{opacity:1,scale:1}}
              transition={{duration:1.3}}
            />
          </div>
          <div className="flex flex-col justify-start items-start w-[420px] gap-5">
            <motion.div className="flex flex-col justify-start max-w-[400px] gap-3"
              initial={{y:-300 ,opacity:0}}
              animate={{y:0 , opacity:1}}
              transition={{duration:1.5}}
            >
              <p className="font-semibold text-2xl">Instruction</p>
              <p className="w-full text-start break-words">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{isReadMoreClick ? foodData?.meals[0]?.strInstructions : truncate(foodData?.meals[0]?.strInstructions,150)}{foodData?.meals[0]?.strInstructions && foodData?.meals[0]?.strInstructions?.length > 150 && !isReadMoreClick ? 
                <span className="font-semibold text-orange-900 hover:text-orange-600 cursor-pointer"
                  onClick={()=>{
                    setIsReadMoreClick(true);
                  }}
                >Read more</span> : ''}
                {isReadMoreClick && <span className="font-semibold text-orange-900 hover:text-orange-600 cursor-pointer"
                  onClick={()=>{
                    setIsReadMoreClick(false);
                  }}
                >&nbsp;&nbsp;Read less</span>}
              </p>
            </motion.div>
            <div className="flex flex-col justify-start items-start w-[420px] max-h-[450px] gap-4">
              <motion.p className="font-semibold text-2xl"
                initial={{x: 500,opacity:0}}
                animate={{x:0 , opacity:1}}
                transition={{duration:1.5}}
              >Ingredients</motion.p>
              <div className="w-full h-full overflow-y-auto grid grid-cols-3 grid-flow-row-dense gap-y-4 gap-x-3 justify-items-center py-4 px-2">
                {foodData && ingredientList && ingredientList.length !== 0 && ingredientList.map((ingredient , index)=> {
                  if(ingredient?.name?.length + ingredient?.amount?.length  > 30){
                    return(
                      <motion.div key={`ingredient${index}`} className="col-span-3 flex flex-col justify-center items-center rounded-xl shadow-lg w-full gap-5 p-2 bg-gradient-to-br from-[#e8ecf4] to-white"
                        initial={{opacity:0 , scale:0}}
                        animate={{opacity:1 , scale:1}}
                        transition={{duration:0.8+index*0.2}}
                      >
                        <img className="w-[120px] h-[100px] object-cover" src={ingredient.picture}/>
                        <div className="w-full flex justify-around items-center">
                          <p className="text-sm font-semibold">{ingredient?.name}</p>
                          <p className="text-sm">{ingredient?.amount}</p>
                        </div>
                      </motion.div>
                    );
                  }
                  if(ingredient?.name?.length + ingredient?.amount?.length > 20){
                    return(
                      <motion.div key={`ingredient${index}`} className="col-span-2 flex flex-col justify-center items-center rounded-xl shadow-lg w-full gap-5 p-2 bg-gradient-to-br from-[#e8ecf4] to-white"
                        initial={{opacity:0 , scale:0}}
                        animate={{opacity:1 , scale:1}}
                        transition={{duration:0.8+index*0.2}}
                      >
                        <img className="w-[120px] h-[100px] object-cover" src={ingredient.picture}/>
                        <div className="w-full flex justify-around items-center">
                          <p className="text-sm font-semibold">{ingredient?.name}</p>
                          <p className="text-sm">{ingredient?.amount}</p>
                        </div>
                      </motion.div>
                    );
                  }
                  return(
                    <motion.div key={`ingredient${index}`} className="flex flex-col justify-start items-center rounded-xl shadow-lg w-full h-fit gap-2 p-2 bg-gradient-to-br from-[#e8ecf4] to-white"
                      initial={{opacity:0 , scale:0}}
                      animate={{opacity:1 , scale:1}}
                      transition={{duration:0.8+index*0.2}}
                    >
                      <img className="w-[100px] h-[100px] object-cover" src={ingredient.picture}/>
                      <div className="w-full flex flex-col justify-center items-center">
                        <p className="text-sm font-semibold">{ingredient?.name}</p>
                        <p className="text-sm">{ingredient?.amount}</p>
                      </div>
                      
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
}

export default Details;