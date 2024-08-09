import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const RestoMenu = () => {
    const [RestroMenu, setRestroMenu] = useState(null);
   

   

    useEffect(() => {
        fetchMenu();
    }, []);



    
    const fetchMenu = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=66590&catalog_qa=undefined&submitAction=ENTER")

        const json = await data.json();

        setRestroMenu(json?.data); 
        // console.log(json);
    };

    if (RestroMenu === null) return <Shimmer />;


    const { name,avgRating,costForTwoMessage,totalRatingsString,sla } = RestroMenu?.cards[2]?.card?.card?.info ;

    const itemcards = RestroMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4].card?.card?.itemCards;

    console.log(itemcards);
    return  (
        <>
        <div className='mx-auto w-4/6'>
            <h1 className='font-semibold text-lg mt-8 '> {name}</h1>
            <div className="mt-2 relative max-w-screen-md border border-solid border-gray-400 rounded-2xl p-4 transition-all duration-500 col-span-12  xl:p-7   lg:col-span-3 md:col-span-6 ">
                <div className=" mb-6 ">
             <p className='font-semibold'>⭐ <span>{avgRating}</span>   <span>({totalRatingsString})</span> &nbsp; {costForTwoMessage}</p>

             <p>{RestroMenu?.cards[2]?.card?.card?.info.cuisines.join(", ")}</p>
                </div>
           
                <p className="text-sm font-medium text-gray-700 transition-all lowercase"> {sla.slaString}</p>
            </div>
        </div>

        <div  className=' p-5 ml-64 '>
        <ul className="w-60 flex flex-col">
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-white border border-gray-300 hover:text-indigo-600 transition-all duration-300 text-gray-900 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg "> {itemcards[1]?.card?.info?.name} </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-white border border-gray-300 hover:text-indigo-600 transition-all duration-300 text-gray-900 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg "> {itemcards[2]?.card?.info?.name}</li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-white border border-gray-300 hover:text-indigo-600 transition-all duration-300 text-gray-900 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg "> {itemcards[3]?.card?.info?.name} </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-white border border-gray-300 hover:text-indigo-600 transition-all duration-300 text-gray-900 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg "> {itemcards[4]?.card?.info?.name} </li>
      </ul>
        </div>
        </>
    )
}

export default RestoMenu