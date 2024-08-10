import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { Menu_list } from './Links';

const RestoMenu = () => {
    const [RestroMenu, setRestroMenu] = useState(null);
   

   
    const {resID} = useParams();
    console.log(resID);
    

    useEffect(() => {
        fetchMenu();
    }, []);


    const fetchMenu = async () => {
        const data = await fetch( Menu_list + resID)

        const json = await data.json();

        setRestroMenu(json?.data); 
        console.log(json);
    };

    if (RestroMenu === null) return <Shimmer />;


    const { name,avgRating,costForTwoMessage,totalRatingsString,sla,cuisines } = RestroMenu?.cards[2]?.card?.card?.info ;


    console.log(RestroMenu?.cards[2]?.card?.card?.info.name);

    const itemcards = RestroMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards;


    // console.log(itemcards);
    return  (
        <>
        <div className='mx-auto w-4/6'>
            <h1 className='font-semibold text-lg mt-8 '> {name}</h1>
            <div className="mt-2 relative max-w-screen-md border border-solid border-gray-400 rounded-2xl p-4 transition-all duration-500 col-span-12  xl:p-7   lg:col-span-3 md:col-span-6 ">
                <div className=" mb-6 ">
             <p className='font-semibold'>⭐<span>{avgRating}</span>   <span>({totalRatingsString})</span> &nbsp; {costForTwoMessage}</p>

             <p>{cuisines.join(", ")}</p>

                </div>
           
                <p className="text-sm font-medium text-gray-700 transition-all lowercase"> {sla.slaString}</p>
            </div>
        </div>

        <div  className=' p-5 ml-64 '>
        <ul className="w-100 flex flex-col">

        {itemcards.map((item) => (<li key={item.card.info.id} className='mt-3 list-disc' >{item.card.info.name} - {"Rs. "}{item.card.info.price/100}</li> ))}
   
      </ul>
        </div>
        </>
    )
}

export default RestoMenu