import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import favicon from "../../public/image/logo.svg"
import UserContext from "../utils/userContext"
import { useSelector } from "react-redux"


const Header = () => {

    const userData = useContext(UserContext)
    const { login } = userData
    
    //login logout button
    const [btnName, setBtnName] = useState("Login")

    //subscribing to the store using selector
    const cartItem = useSelector((store) => store.cart.items);

    return (
        <div className="header-container" >
            <div className="logo-container">
                <img className="logo-img" alt="logo" src={favicon} />
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
                    <li><Link to="/cart" className="nav-link">Cart {cartItem.length>0 && <span className="cart_item_count">{cartItem.length>0 ?  cartItem.length : ""}</span> }</Link></li>
                    <li>
                        {login}
                    </li>
                    <li><button className={`${btnName === "Login" ? "black-btn" : "red-btn"}`} onClick={() => {
                        btnName === "Login"
                            ? setBtnName("Logout")
                            : setBtnName("Login");
                    }} >{btnName}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;