import { CDN_URL } from "../utils/constants";

const RestaurantMenuCard = (props) => {
    const { resData } = props

    console.log(resData)

    const { name, defaultPrice, price, description, imageId, offerTags, ratings } = resData.card.info;

    return (
        <ul className="menu_item">
            <div className="menu_text_conainer" >
                <li>{name}</li>
                <li>{defaultPrice / 100 ?? price / 100} {offerTags[0]?.title}</li>
                <li>{ratings?.aggregatedRating?.rating} ({Number(ratings?.aggregatedRating?.ratingCount?.match(/\d+/)?.[0] || 0)})</li>
                <li> {description}</li>
            </div>
            <div className="menu_img_conainer">
                <img src={CDN_URL + imageId} className="menu_img" ></img>
            </div>

        </ul>

    )
}

export default RestaurantMenuCard