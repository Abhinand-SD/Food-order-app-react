import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuList = ({ resData }) => {


    const {name,defaultPrice,price,offerTags,ratings,description,imageId} = resData.info;

    const dispatch = useDispatch();
    
    return (

        <div className="menu_item" >
            <div className="menu_text_conainer" >
                <h3>{name}</h3>
                <p>&#8377;{(defaultPrice ?? price) / 100} {offerTags?.title}</p>
                <p>{ratings?.aggregatedRating?.rating || 0} ({Number(ratings?.aggregatedRating?.ratingCount?.match(/\d+/)?.[0] || 0)})</p>
                <p> {description}</p>
                <button onClick={()=>{
                    
                    // diapatch  action
                    dispatch(addItem(resData.info))
                }} >ADD</button>

            </div>
            <div className="menu_img_conainer">
                <img alt="no image" src={CDN_URL + imageId} className="menu_img" ></img>
            </div>

        </div>
    )

}
export default RestaurantMenuList;