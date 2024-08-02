import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const err = useRouteError();
    console.log(err)
  return (
    <div>

        <p className='text-center font-bold text-6xl mt-[300px]'>oops... Somthing Went wrong<span className='text-red-700'>!!!</span>😱</p>

        <h1 className='text-center font-bold mt-36 text-3xl text-red-500'>
            {err.status} : {err.statusText}
        </h1>
        
    </div>
  )
}

export default Error