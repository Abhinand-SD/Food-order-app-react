import Shimmer from "./shimmer";
import RestaurantMenuCategory from "./restaurantMenuCategory";

import { useParams } from "react-router-dom"
import { useRestaurantMenu } from "../utils/useRestaurantApi";
import { useState } from "react";

const RestaurantMenu = () => {
    // Fetching restaurant id from params
    const { resId } = useParams()

    // Restaurant menu data comming from hooks
    const resInfo = useRestaurantMenu(resId)

    //menu category indexing
    const [showIndex, setShowIndex] = useState(null)


    

    // Without data showing shimmer
    if (resInfo === null) return <Shimmer />

    const { avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla } = resInfo?.data?.cards[2]?.card?.card?.info;

    const { descriptionList } = resInfo?.data?.cards[2]?.card?.card?.info?.aggregatedDiscountInfo;

    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    // resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1].card.card;
    // || resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1].card.card.categories[1]

    return (
        <div className="restaurant_menu_container" >
            <div className="restaurant_menu_header">
                <div className="menu_header">
                    <h1 className="resta-name">{resInfo?.data?.cards[0]?.card?.card?.text}</h1>
                </div>

                <div>
                    <span>{resInfo?.data?.cards[1]?.card?.card?.tabs[0]?.title}</span> / <span>{resInfo?.data?.cards[1]?.card?.card?.tabs[1]?.title}</span>
                </div>

                {/* Restaurant deatails*/}
                <div className="header_container">
                    <span >{avgRating} ({totalRatingsString})</span> <span> - {costForTwoMessage}</span>
                    <p>{cuisines.join(", ")}</p>
                    <p>outlet- {areaName}</p>
                    <p>{sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins</p>
                </div>
                <div>
                    <h6 className="offer_header">Deals for you</h6>
                </div>
                {/* Bank offers */}
                <div className="offer_box_container">

                    <ul className="offer_box">
                        <li>{descriptionList[0]?.meta}</li>
                    </ul>
                    <ul className="offer_box">
                        <li>{descriptionList[1]?.meta}</li>

                    </ul>

                </div>

            </div>

            {/* Restaurant category item*/}
            <div className="menu_container">
                {itemCards?.map((item, index) => (
                    <RestaurantMenuCategory
                        key={item.card.card.categoryId}
                        resData={item.card.card}
                        showItem={index === showIndex}
                        setShowIndex={() => setShowIndex(prevIndex => prevIndex === index ? null : index)} // Toggle logic
                    />
                ))}
            </div>


        </div>
    )

}

export default RestaurantMenu;