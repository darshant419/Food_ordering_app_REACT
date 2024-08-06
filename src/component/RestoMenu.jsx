import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const RestoMenu = () => {
    const [RestroMenu, setRestroMenu] = useState(null);
    const { name } = RestroMenu?.cards[2]?.card?.card?.info;

   

    useEffect(() => {
        fetchMenu();
    }, []);

    
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=66590&catalog_qa=undefined&submitAction=ENTER")

        const json = await data.json();

        setRestroMenu(json?.data); 
        console.log(json);
    };

   
    return RestroMenu === null ? <Shimmer /> : (
        <div className='mx-auto w-4/6'>
            <h1 className='font-semibold text-lg mt-8 '> {name}</h1>
            <div className="mt-2 relative max-w-screen-md border border-solid border-gray-400 rounded-2xl p-4 transition-all duration-500 col-span-12  xl:p-7   lg:col-span-3 md:col-span-6 ">
                <div className=" mb-6 ">
             
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">Fast Transaction</h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 "> Provides faster transaction, so money arrives in realtime </p>
            </div>
        </div>
    )
}

export default RestoMenu