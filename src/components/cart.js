import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearAll } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {

    const cartItem = useSelector((state) => state.cart.items);
    const dispatch = useDispatch()

    const totalPrice = cartItem.reduce((acc, item) => {
        const price = (item.defaultPrice ?? item.price) / 100 || 0
        return acc + price;

    }, 0)

    return cartItem.length > 0 ? (
        <div className="cart_container">
            <div className="cart_box_container">
                {cartItem.map(item => (

                    <div key={item.id || item.name} className="cart_item" >
                        <div className="cart_text_conainer" >
                            <h5>{item.name}</h5>
                            <p>&#8377;{((item.defaultPrice ?? item.price) ? (item.defaultPrice ?? item.price) / 100 : "N/A")}</p>
                        </div>
                        <div className="cart_img_conainer">
                            <img alt="no image" src={CDN_URL + item.imageId} className="cart_img" ></img>
                        </div>


                    </div>


                ))}

                <div className="car_box_footer">
                    <h5>Total Price : &#8377; {totalPrice}</h5>
                    <button onClick={() => {
                        dispatch(clearAll())

                    }}>Clear All</button>

                </div>
            </div>
        </div>
  

    ) :
        (
            <div className="error-page-container">
                <div className="error-page-box">
                    <h1>Your cart is empty</h1>
                    <h5>You can go to home page to view more restaurants</h5>
                    <Link to="/" className="home-btn">Go back</Link>
                </div>
            </div>
        )
}

export default Cart;