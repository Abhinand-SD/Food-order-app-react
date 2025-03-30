import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import RestaurantMenuList from "./restaurantMenuList";

const RestaurantMenuCategory = (props) => {
    const { resData, showItem, setShowIndex} = props

    const handles = ()=>{
        setShowIndex()
    } 


    return (

        <div onClick={handles} className="category_container">
            <div className="category_header">
                <p>{resData?.title} ({resData.itemCards.length})</p>
                <span>🔽</span>
            </div>

            <div>
                {showItem &&
                    resData?.itemCards?.map(item => (
                        <RestaurantMenuList key={item.card.info.id} resData={item.card} />
                    ))}
            </div>

        </div>

    )
}

export default RestaurantMenuCategory;