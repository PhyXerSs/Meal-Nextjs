import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function index() {
  const router = useRouter();
  useEffect(()=>{
    router.push('/')
  },[])

  return (
    <div></div>
  )
}

export default index