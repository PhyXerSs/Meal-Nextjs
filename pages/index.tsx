import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import LatestMeals from '../components/LatestMeals'
import RecommendNationalMeals from '../components/RecommendNationalMeals'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center bg-[#edf0f2]">
      <Banner/>
      <LatestMeals/>
      <RecommendNationalMeals/>
    </div>  
  )
}

export default Home
