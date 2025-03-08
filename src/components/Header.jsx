import { LOGO_URL } from "../utils/constants"
import { useState } from "react"

const Header = () => {

const [btnName, setBtnName] = useState("Login")
    return (
        <div className="header-container" >
            <div className="logo-container">
                <img className="logo-img" alt="logo" src= {LOGO_URL}/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li><button className={`${btnName === "Login" ? "green-btn" : "red-btn"}`} onClick={()=>{
                        btnName === "Login" 
                        ? setBtnName("Logout") 
                        : setBtnName("Login");
                    }} >{btnName}</button></li> 
                </ul>
            </div>
        </div>
    )
}

export default Header