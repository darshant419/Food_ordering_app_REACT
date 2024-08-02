
export function RestaurantCard({ resData }) {

    const { cloudinaryImageId, avgRating, cuisines, areaName, name,sla } = resData?.info;


    return (

    <>
   


      <div className="w-[300px] rounded-md border m-6 hover:cursor-pointer transition-all duration-300 hover:scale-95 hover:shadow-lg hover:shadow-gray-400 ">
        <img
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
            alt="card"
            className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="px-4 py-2 overflow-hidden w-[290px]">

            <h1 className="text-lg font-semibold">{name}</h1>

            <div className="mt-3 text-sm text-gray-500 font-black px-2  ">
                <span>{avgRating}</span> <span className="float-right">
                    {sla.deliveryTime} mins </span><br />
               <p className="pr-6 inline-block" > {cuisines.join(",")}</p> <br />
                {areaName}
            </div>

        </div>
    </div>
    </>
  


    )
}



