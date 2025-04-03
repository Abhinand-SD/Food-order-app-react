import RestaurantCard, { offerCards } from "./RestaurantCard"
import { useRestaurantInfo } from "../utils/useRestaurantApi"
import { useState} from "react"
// import { RESTA_INFO } from "../utils/constants"
import Shimmer from "./shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {

    const [searchText, setSearchText] = useState("")

    const onlineStatus = useOnlineStatus();

    const Offers = offerCards(RestaurantCard)


    const {listOfRestaurants, filteredRest, setFilterdRest} = useRestaurantInfo()


    // if user is offline send a message
    if (onlineStatus === false) {
        return (
            <div className="online_status_container">
                <h1>Your are offline plese check your internet connnection</h1>
            </div>)

    }
    return (
        <div className="body">
            {/* Search box container*/}
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
            {/* Filter container */}
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

            {/* Restaurant cards */}
            {listOfRestaurants?.length === 0 ? <Shimmer /> : (
                <div className="card-container">
                    {filteredRest?.map((item) => (
                        <Link to={/restaurant/ + item.info.id} className="card-title" key={item.info.id}>

                            <RestaurantCard resData={item} />

                        </Link>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Body 