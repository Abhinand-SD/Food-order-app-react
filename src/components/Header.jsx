import { LOGO_URL } from "../utils/constants"

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header