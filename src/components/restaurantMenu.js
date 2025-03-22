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
    // console.log(resInfo)

    if (resInfo === null) return <Shimmer />

    const { avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla } = resInfo?.data?.cards[2]?.card?.card?.info;

    const { descriptionList } = resInfo?.data?.cards[2]?.card?.card?.info?.aggregatedDiscountInfo;
    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1].card.card ?? resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1].card.card.categories[1]

    // resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1].card.card;
    // || resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1].card.card.categories[1]
    console.log(itemCards)

    return (
        <div className="restaurant_menu_container" >
            <div className="restaurant_menu_header">
                <div className="menu_header">
                    <h1 className="resta-name">{resInfo?.data?.cards[0]?.card?.card?.text}</h1>
                </div>

                <div>
                    <span>{resInfo?.data?.cards[1]?.card?.card?.tabs[0]?.title}</span> / <span>{resInfo?.data?.cards[1]?.card?.card?.tabs[1]?.title}</span>
                </div>


                <div className="header_container">
                    <span className="icon-text" > <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg></span> <span>{avgRating}({totalRatingsString}) </span> <span> - {costForTwoMessage}</span>
                    <p>{cuisines.join(", ")}</p>
                    <p>outlet- {areaName}</p>
                    <p>{sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins</p>
                </div>
                <div>
                <h6 className="offer_header">Deals for you</h6>
                </div>
                {/* Bank offers */}
                <div className="offer_box_container">
                
                    {descriptionList.map((item) => (
                        <ul className="offer_box">
                            <li>{item.meta}</li>
                        </ul>
                    ))}

                </div>
            </div>

            <div className="menu_container">

                {itemCards?.map((item) => (<RestaurantMenuCard key={item?.card?.info?.id} resData={item} />))}

            </div>

        </div>
    )

}

export default RestaurantMenu;