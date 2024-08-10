
import { useEffect, useState } from 'react';
import { RestaurantCard } from './restauraent'
import Shimmer from './Shimmer';
import { Link } from "react-router-dom"




function BodyEle() {
    console.log("i am body ele");
    const [listofResturant, setlistofRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");



    useEffect(() => {
        fetchData();
        console.log("i am useEffect");
    }, []);



    const fetchData = async () => {



        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        // console.log(json);
        //optional chaing
        setlistofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    //conditional rendring
    //    if(listofResturant.length === 0){
    //     return (
    //       <>
    //       <Shimmer/>
    //       </>
    //     )
    //    }


    //conditional rendring in return statement
    return listofResturant.length === 0 ? <Shimmer /> : (

        <>
            <div className=' align-center flex justify-between  flex-wrap sm:align-center sm:mt-5 mx-[100px] sm:g-5 '>
                <div className="flex grow ">
                    <input
                        className="flex h-10 w-[250px] border-neutral-900 rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                        type="text"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        placeholder="Serach"
                    ></input>
                    <button
                        onClick={() => {

                            const filteredName = listofResturant.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                            // console.log(filteredName)
                            setfilteredRestaurant(filteredName)

                        }}
                        className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black relative '>Search</button>
                </div>
                <button onClick={() => {

                    const filteredlist = listofResturant.filter((res) => res?.info?.avgRating > 4.5)

                    setfilteredRestaurant(filteredlist)

                }

                }
                    type="button"
                    className=" rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black relative flex justify-center align-center"
                >Top Rated Restaurants
                </button>

            </div>

            <div className="flex flex-wrap align-center justify-center">

                {filteredRestaurant.map((restaurant) => (
                   <Link key={restaurant.info.id} to={"/restaurants/"+  restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link> 
                
                ))
                }

            </div>

        </>

    )
}

export default BodyEle;









