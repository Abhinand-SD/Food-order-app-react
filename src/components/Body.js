import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import { resList } from "../utils/mockData"
import Shimmer from "./shimmer"

const Body = () => {

    const [listOfRestaurants, setList] = useState(resList)

    useEffect(() => {
        fetch("http://localhost:5000/api/restaurants")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("✅ Fetched Data:", data);
                setRestaurants(data);
            })
            .catch((error) => {
                console.error("❌ Error fetching data:", error);
            });
    }, []);


    return (
        <div className="body">

            <div className="search-container">

                <input className="search-item" type="text" placeholder="Search restorent and food"></input>
                <button className="search-btn"><span className="material-symbols-outlined">
                    search
                </span></button>

            </div>

            <div className="filter-container">

                <button className="filter-btn" onClick={() => {
                    console.log("jfsdj")
                    setList(resList)

                }} >All</button>

                <button className="filter-btn" onClick={() => {
                    const filterRateingList = listOfRestaurants.filter(item => item.info.avgRating > 4.5)
                    setList(filterRateingList)
                }} >Top Restaurants</button>

                <button className="filter-btn" onClick={() => {

                    const filterPrizeList = listOfRestaurants.filter(item => {

                        const cost = Number(item.info.costForTwo.replace(/[^0-9]/g, ""));
                        return cost < 201;

                    })
                    setList(filterPrizeList)

                }}
                >Low Prize</button>
                
                <button className="filter-btn" onClick={() => {

                    const filterPrizeList = listOfRestaurants.filter(item => {

                        const cost = Number(item.info.costForTwo.replace(/[^0-9]/g, ""));
                        return cost >= 400;

                    })
                    setList(filterPrizeList)

                }}
                >Premium</button>

                <button className="filter-btn" onClick={() => {
                    const filterTime = listOfRestaurants.filter(item => item.info.sla.deliveryTime < 21)

                    setList(filterTime)
                }}>Fast Delivery</button>

                <button className="filter-btn" onClick={() => {

                }}>Offers</button>

<button className="filter-btn" onClick={() => {

}}>Pure Veg</button>

            </div>

            {listOfRestaurants.length === 0 ? <Shimmer /> : (
                <div className="card-container">
                    {listOfRestaurants.map((item) => (
                        <RestaurantCard key={item.id} resData={item} />
                    ))}
                </div>
            )}

        </div>
    )
}

export default Body 