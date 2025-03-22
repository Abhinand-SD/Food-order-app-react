import { CDN_URL } from "../utils/constants";

const RestaurantMenuCard = (props) => {
    const { resData } = props

    console.log(resData)

    const { name, defaultPrice, price, description, imageId, offerTags, ratings } = resData.card.info;

    return (
        <div className="menu_item">
            <div className="menu_text_conainer" >
                <h3>{name}</h3>
                <p>&#8377;{(defaultPrice ?? price)/100} {offerTags?.title}</p>
                <p>{ratings?.aggregatedRating?.rating || 0} ({Number(ratings?.aggregatedRating?.ratingCount?.match(/\d+/)?.[0] || 0)})</p>
                <p> {description}</p>
            </div>
            <div className="menu_img_conainer">
                <img alt="no image" src={CDN_URL + imageId} className="menu_img" ></img>
            </div>
        </div>

    )
}

export default RestaurantMenuCard