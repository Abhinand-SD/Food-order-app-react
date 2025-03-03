import React from "react";
import ReactDOM from "react-dom/client";

const logoImg = "logo.png"

const Header = () => {
    return (
        <div className="header-container" >
            <div className="logo-container">
                <img className="logo-img" alt="logo" src="https://media.gettyimages.com/id/1132514938/vector/vegan-logo-raw-healthy-food-badge-tag-for-cafe-restaurants-and-packaging.jpg?s=612x612&w=0&k=20&c=Own6gmoalDSC8bcRZRIHHz-PtcKB7WCJtaFGpA3LKIc=" />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="card">
        <img className="resto-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/2fddbc8f-05a1-4b26-a6d5-99e56f4248a5_677777.jpg"/>
        <h3>Restaurant Name</h3>
        <h4>Pizza Hut</h4>
        <h6>⭐4.5</h6>
        <h6>Beverages, Fast Food
        Munduparamba</h6>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">

                <input className="search-item" type="text" placeholder="Search restorent and food"></input>
                <button className="search-btn">Go</button>

            </div>
            <div className="card-container" >
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}
root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
