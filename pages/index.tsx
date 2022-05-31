import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Banner from '../components/Banner'
import LatestMeals from '../components/LatestMeals'
import RecommendNationalMeals from '../components/RecommendNationalMeals'
import ShowAllCategoryMealsSelected from '../components/ShowAllCategoryMealsSelected'
import ShowAllCountryMealSelected from '../components/ShowAllCountryMealSelected'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const NationalNameSelect:string = useSelector<any,any>((state)=>state.National.nationName)
  const CategoryName:string = useSelector<any,any>((state)=>state.Category.categoryName)
  useEffect(()=>{
    if(NationalNameSelect === '-' && CategoryName === '-'){
        const body = document.body;
        body.style.overflowY = 'auto';   
    }else{
      const body = document.body;
      body.style.overflowY = 'clip';
    }
  },[NationalNameSelect,CategoryName])

  return (
    <>
      <ShowAllCountryMealSelected/>
      <ShowAllCategoryMealsSelected/>
      <div className="flex flex-col items-center bg-[#edf0f2]">
        
        <Banner/>
        <LatestMeals/>
        <RecommendNationalMeals/>
      </div>  
    </>
  )
}

export default Home
