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

const RestaurantCard = (props) => {
    const {resName, foodName, starRate, foodIMG} = props
    
    return (
        <div className="card">
        <img className="resto-img" src={foodIMG}/>
        <h3>{resName}</h3>
        <h4>{foodName}</h4>
        <h6>{starRate}</h6>
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
            <RestaurantCard resName="Pizza Hut" foodName="pizza" starRate="⭐4.9" foodIMG="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/2fddbc8f-05a1-4b26-a6d5-99e56f4248a5_677777.jpg"/>
            <RestaurantCard resName="Nahdhi Mandhi" foodName="Alpham" starRate="⭐5.1" foodIMG="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b5303a94c367062c158ce278bf6307a3"/>
            <RestaurantCard resName="Albake" foodName="Gazania Mezban" starRate="⭐4.9" foodIMG="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/87523b3c-cd5c-459b-9ed1-51a1e03c5832_289068%20(1).jpg"/>
            <RestaurantCard resName="KFC" foodName="pizza" starRate="⭐3.3" foodIMG="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7f4f2dc5c2bf4771245f94de4400aa8c"/>
            <RestaurantCard resName="KFC" foodName="pizza" starRate="⭐3.1" foodIMG="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bf3c2df75f63505407635e32df6a7e3a"/>
            <RestaurantCard resName="KFC" foodName="pizza" starRate="⭐2.5" foodIMG=""/>
            <RestaurantCard resName="KFC" foodName="pizza" starRate="⭐5.2" foodIMG=""/>
            <RestaurantCard resName="KFC" foodName="pizza" starRate="⭐3.1" foodIMG=""/>
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
