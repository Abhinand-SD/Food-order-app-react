import RestaurantCard from "./RestaurantCard"
import { resList } from "../utils/mockData"

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">

                <input className="search-item" type="text" placeholder="Search restorent and food"></input>
                <button className="search-btn"><span className="material-symbols-outlined">
                    search
                </span></button>

            </div>
            <div className="card-container" >
                {
                    resList.map((item) => <RestaurantCard key={item.info.id} resData={item} />)
                }
            </div>
        </div>
    )
}

export default Body 