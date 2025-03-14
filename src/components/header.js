import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import favicon from "../../public/image/logo.svg"

const Header = () => {

    const [btnName, setBtnName] = useState("Login")
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
                    <li><Link to="/cart" className="nav-link">Cart</Link></li>

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

export default Header