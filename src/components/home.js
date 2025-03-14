import RestaurantCard from "./restaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./shimmer"
import { Link } from "react-router-dom"

const Body = () => {

    const [listOfRestaurants, setList] = useState([])
    const [filteredRest, setFilterdRest] = useState([])

    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData();
        
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
    const json = await data.json()

    setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterdRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    return (
        <div className="body">

            <div className="search-container">

                <input className="search-item" type="text" placeholder="Search restorent and food" value={searchText} onChange={(event) => {
                    setSearchText(event.target.value)
                }}></input>
                
                <button className="search-btn" onClick={() => {
                    const res = listOfRestaurants.filter(item => item.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
        
                    setFilterdRest(res)
                }} ><span className="material-symbols-outlined">   
                        search
                    </span></button>
            </div>

            <div className="filter-container">

                <button className="filter-btn" onClick={() => {
                    
                    setFilterdRest(listOfRestaurants)

                }} >All</button>

                <button className="filter-btn" onClick={() => {
                    const filterRateingList = listOfRestaurants.filter(item => item.info.avgRating > 4.5)
                    setFilterdRest(filterRateingList)
                }} >Top Restaurants</button>

                <button className="filter-btn" onClick={() => {

                    const filterPrizeList = listOfRestaurants.filter(item => {

                        const cost = Number(item.info.costForTwo.replace(/[^0-9]/g, ""));
                        return cost < 201;

                    })
                    setFilterdRest(filterPrizeList)

                }}
                >Low Prize</button>

                <button className="filter-btn" onClick={() => {

                    const filterPrizeList = listOfRestaurants.filter(item => {

                        const cost = Number(item.info.costForTwo.replace(/[^0-9]/g, ""));
                        return cost >= 400;

                    })
                    setFilterdRest(filterPrizeList)

                }}
                >Premium</button>

                <button className="filter-btn" onClick={() => {
                    const filterTime = listOfRestaurants.filter(item => item.info.sla.deliveryTime < 21)

                    setFilterdRest(filterTime)
                }}>Fast Delivery</button>


                <button className="filter-btn" onClick={() => {
                    setFilterdRest()

                }}>Pure Veg</button>

            </div>
          

            {listOfRestaurants.length === 0 ? <Shimmer /> : (
                <div className="card-container">
                    {filteredRest.map((item) => (
                        <Link to={/restaurant/+ item.info.id} className="card-title"> <RestaurantCard key={item.info.id} resData={item} /></Link>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Body 