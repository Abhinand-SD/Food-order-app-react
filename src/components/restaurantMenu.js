import { useState, useEffect } from "react";
import { RESTA_MENU } from "../utils/constants";
import Shimmer from "./shimmer";
import { CDN_URL } from "../utils/constants";
import RestaurantMenuCard from "./restaurantMenuCard";

import { useParams } from "react-router-dom"

const RestaurantMenu = () => {

    const { resId } = useParams()

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu();

    }, [])

    const fetchMenu = async () => {
        const data = await fetch(RESTA_MENU + resId)
        const json = await data.json();

        setResInfo(json)
    }
    console.log(resInfo)

    if (resInfo === null) return <Shimmer />

    const {avgRating,totalRatingsString, costForTwoMessage, cuisines, areaName, sla} =resInfo?.data?.cards[2]?.card?.card?.info;
    
    const {descriptionList} = resInfo?.data?.cards[2]?.card?.card?.info?.aggregatedDiscountInfo;
    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1].card.card;

    console.log(itemCards)

    return (
        <div className="restaurant_menu_container" >
            <div>
                <h1>{resInfo?.data?.cards[0]?.card?.card?.text}</h1>
            </div>

            <div>
                <span>{resInfo?.data?.cards[1]?.card?.card?.tabs[0]?.title}</span> / <span>{resInfo?.data?.cards[1]?.card?.card?.tabs[1]?.title}</span>
            </div>


            <div>
                <h2>Start_rating:{avgRating}({totalRatingsString})</h2> <span>Prize: {costForTwoMessage}</span>
                <h3>{cuisines}</h3>
                <h3>outlet- {areaName}</h3>
                <h2>{sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins</h2>
            </div>
            
            {/* Bank offers */}
            <div>
                { descriptionList.map((item) => (
                    <ul>
                        <li>{item.meta}</li>
                    </ul>
                )) }
                
            </div>

            <div className="menu_container">
                
                {itemCards.map((item) => ( <RestaurantMenuCard key={item.card.info.id} resData = {item} />))}
                
            </div>

        </div>
    )

}

export default RestaurantMenu;