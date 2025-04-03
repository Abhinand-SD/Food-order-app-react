import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import RestaurantMenuList from "./restaurantMenuList";

const RestaurantMenuCategory = ({ resData, showItem, setShowIndex }) => {
    return (
        <div className="category_container">
            <div onClick={setShowIndex} className="category_header">
                <p>{resData?.title} ({resData.itemCards.length})</p>
                <span>{showItem ? "🔼" : "🔽"}</span>
            </div>

            {showItem && (
                <div className="category_items">
                    {resData?.itemCards?.map(item => (
                        <RestaurantMenuList key={item.card.info.id} resData={item.card} />
                    ))}
                </div>
            )}
        </div>
    );
};


export default RestaurantMenuCategory;