import React, { useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { countries, getListCategories, listCategoriesResultType } from '../pages/api/TheMealDB';
import CircularProgress from '@mui/material/CircularProgress';

export interface categoryType{
    idCategory:string,
    strCategory:string,
    strCategoryThumb:string,
    strCategoryDescription:string,
}

function Navbar() {
    const [ isNavClick , setIsNavClick ] = useState<boolean>(false);
    const [ categoryData , setCategoryData ] = useState<categoryType[] | null>( null );
    const router = useRouter();
    
    useEffect(()=>{
        (async function() {
           let resultCategories = await getListCategories() as listCategoriesResultType;
           let listCategories = [] as categoryType[];
           resultCategories?.categories.forEach((data)=>{
               let category = {} as categoryType;
               category.idCategory = data.idCategory;
               category.strCategory = data.strCategory;
               category.strCategoryDescription = data.strCategoryDescription;
               category.strCategoryThumb = data.strCategoryThumb;
               listCategories.push(category);
           })
           setCategoryData(listCategories);
        }())
    },[])

    return (
        <div className="fixed w-full top-0 flex h-20 justify-center items-center z-[999]">
            <div className='flex w-full max-w-5xl justify-end items-center gap-7'>
                <div className='flex justify-center items-center rounded-full bg-transparent hover:bg-orange-900 hover:text-white cursor-pointer ease-in duration-200 px-4 py-1'
                    onClick={()=>{
                        router.push('/')
                    }}
                >
                    <p className="font-semibold"> Home </p>
                </div>
                <Popover className="relative focus:outline-none">
                    <Popover.Button className='flex justify-center items-center rounded-full bg-transparent gap-1 hover:bg-orange-900 hover:text-white focus:outline-none cursor-pointer ease-in duration-200 px-4 py-1'>
                        <p className="font-semibold"> National </p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 font-semibold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </Popover.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Popover.Panel className="absolute -bottom-[390px] right-1 flex flex-col justify-start items-center max-h-96 w-52 rounded-md shadow-md overflow-y-auto bg-white">
                            {countries.map((country)=>(
                                <div className='flex w-full justify-start items-center py-1 px-4 hover:bg-orange-900 hover:text-white gap-3 cursor-pointer ease-in duration-200'>
                                    <img src={country.flagImage} className="w-10 rounded-sm" alt="no image" />
                                    <p>{country.name}</p>
                                </div>
                            ))}
                        </Popover.Panel>

                    </Transition>
                </Popover>

                <Popover className="relative focus:outline-none">
                    <Popover.Button className='flex justify-center items-center rounded-full bg-transparent gap-1 hover:bg-orange-900 hover:text-white focus:outline-none cursor-pointer ease-in duration-200 px-4 py-1'>
                        <p className="font-semibold"> Category </p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 font-semibold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </Popover.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Popover.Panel className="absolute -bottom-[390px] right-1 flex flex-col justify-start items-center max-h-96 w-48 rounded-md shadow-md overflow-y-auto bg-white">
                            {categoryData !== null ? categoryData.map((category)=>(
                                <div className='flex w-full justify-start items-center py-3 px-4 hover:bg-orange-900 hover:text-white gap-3 cursor-pointer ease-in duration-200'>
                                    <img src={category.strCategoryThumb} className="w-10 rounded-sm" alt="no image" />
                                    <p>{category.strCategory}</p>
                                </div>
                            )):
                            <CircularProgress size={'100px'} sx={{ color:'background-color: rgb(124 45 18 / var(--tw-bg-opacity))'}}/>
                            }
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
        </div>
  )
}


export default Navbar

