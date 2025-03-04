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
    const { resData } = props;

    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = resData.info

    return (
        <div className="card">
            <img className="resto-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} />
            <h4>{name}</h4>
            <span className="icon-text" > <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg> {avgRating} • {sla.deliveryTime + " Mins"}</span>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo}</h5>
            <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>

        </div>
    )
}


const resList = [
    {
        "info": {
            "id": "359066",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/09e4bdd5-2415-4ad2-8a5b-41e5af000518_359066.jpg",
            "locality": "Indira Gandhi Road",
            "areaName": "Arayidathupalam",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.3,
            "parentId": "721",
            "avgRatingString": "4.3",
            "totalRatingsString": "4.8K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/pizza-hut-indira-gandhi-road-arayidathupalam-rest359066",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "85442",
            "name": "Natural Ice cream",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/8/875cfb65-4b6e-49b7-872d-ee81e8ed34a3_85442.JPG",
            "locality": "Mavoor Road",
            "areaName": "Palayam",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.8,
            "veg": true,
            "parentId": "2093",
            "avgRatingString": "4.8",
            "totalRatingsString": "7.2K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 23:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/natural-ice-cream-mavoor-road-palayam-rest85442",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "490981",
            "name": "Top Form - Mavoor Road",
            "cloudinaryImageId": "b5303a94c367062c158ce278bf6307a3",
            "locality": "Opp KSRTC stand",
            "areaName": "Opp Ksrtc stand",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "South Indian",
                "Kerala",
                "Biryani",
                "Chinese",
                "Salads",
                "Seafood"
            ],
            "avgRating": 4.5,
            "parentId": "558211",
            "avgRatingString": "4.5",
            "totalRatingsString": "14K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-05 05:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Biryani.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/top-form-mavoor-road-opp-ksrtc-stand-rest490981",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "230155",
            "name": "Sagar Restaurant (New Sagar)",
            "cloudinaryImageId": "sfazfve7qn0ybwbgrrhj",
            "locality": "Mavoor Road",
            "areaName": "Mavoor Rd",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Chinese",
                "South Indian",
                "Ice Cream",
                "Biryani"
            ],
            "avgRating": 4.4,
            "parentId": "20195",
            "avgRatingString": "4.4",
            "totalRatingsString": "14K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 23:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/sagar-restaurant-new-sagar-mavoor-road-mavoor-rd-rest230155",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "153273",
            "name": "Hotel Sagar (Old Sagar)",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/23/9673164b-1faa-4dea-b152-1e53105458b0_153273 ss.jpg",
            "locality": "Mavoor Road",
            "areaName": "Mavoor Rd",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Chinese",
                "South Indian",
                "Ice Cream",
                "Biryani"
            ],
            "avgRating": 4.6,
            "parentId": "20206",
            "avgRatingString": "4.6",
            "totalRatingsString": "31K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 0.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-05 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Biryani.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/hotel-sagar-old-sagar-mavoor-road-mavoor-rd-rest153273",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "464673",
            "name": "Soofi Mandi",
            "cloudinaryImageId": "mkevcwbgxz9kzq7himtu",
            "locality": "Mananchira",
            "areaName": "Kurial lane",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Arabian",
                "Middle Eastern"
            ],
            "avgRating": 4.3,
            "parentId": "20530",
            "avgRatingString": "4.3",
            "totalRatingsString": "6.6K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/soofi-mandi-mananchira-kurial-lane-rest464673",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "382724",
            "name": "New Malabar Family Restaurant",
            "cloudinaryImageId": "dypfwfzd1seuqyanabsv",
            "locality": "Karaparamba",
            "areaName": "Karaparamba",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Chinese",
                "South Indian",
                "Biryani"
            ],
            "avgRating": 4.5,
            "parentId": "251724",
            "avgRatingString": "4.5",
            "totalRatingsString": "8.7K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/new-malabar-family-restaurant-karaparamba-rest382724",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "450458",
            "name": "Kadeejas Kitchen",
            "cloudinaryImageId": "ytqevcahisdyh4wslbkp",
            "locality": "Kattukulangara",
            "areaName": " Nellikkode",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Biryani"
            ],
            "avgRating": 4.7,
            "parentId": "271285",
            "avgRatingString": "4.7",
            "totalRatingsString": "2.1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 22:15:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/kadeejas-kitchen-kattukulangara-nellikkode-rest450458",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "165106",
            "name": "Waffee House",
            "cloudinaryImageId": "djxpxqe7rwel9vxocrtl",
            "locality": "PT Usha Road",
            "areaName": "Vellayil",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Waffle",
                "Desserts",
                "Beverages",
                "Snacks"
            ],
            "avgRating": 4.5,
            "parentId": "12498",
            "avgRatingString": "4.5",
            "totalRatingsString": "3.6K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-05 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/waffee-house-pt-usha-road-vellayil-rest165106",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "291800",
            "name": "Beyondburg Inc",
            "cloudinaryImageId": "cbf725cf7f6e603aa14893125098466c",
            "locality": "PT Usha Rd",
            "areaName": "PT Usha Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "American",
                "Beverages"
            ],
            "avgRating": 4.6,
            "parentId": "43816",
            "avgRatingString": "4.6",
            "totalRatingsString": "2.1K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 23:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/beyondburg-inc-pt-usha-rd-pt-usha-road-rest291800",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "481120",
            "name": "Nahdi Kuzhi Mandi",
            "cloudinaryImageId": "oky2o28b1rraeglmyjjy",
            "locality": "Moonalungal, Mananchira",
            "areaName": "Red Cross Rd, Vellayil",
            "costForTwo": "₹499 for two",
            "cuisines": [
                "Arabian",
                "Middle Eastern"
            ],
            "avgRating": 4.4,
            "parentId": "561185",
            "avgRatingString": "4.4",
            "totalRatingsString": "5.9K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 22:15:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/nahdi-kuzhi-mandi-moonalungal-mananchira-red-cross-rd-vellayil-rest481120",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "489634",
            "name": "Punjab Di Rasoi",
            "cloudinaryImageId": "m8ehxqnc6zima87db6ki",
            "locality": "Silk Street",
            "areaName": "Mananchira",
            "costForTwo": "₹399 for two",
            "cuisines": [
                "Desserts",
                "Chinese",
                "North Indian",
                "Biryani"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "161981",
            "avgRatingString": "4.3",
            "totalRatingsString": "3.0K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/punjab-di-rasoi-silk-street-mananchira-rest489634",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "302440",
            "name": "Live Kitchen",
            "cloudinaryImageId": "zobea8ul3wfazc69auyo",
            "locality": "Ashokapuram,Nadakkave",
            "areaName": "Mavoor",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Kerala",
                "South Indian"
            ],
            "avgRating": 4.2,
            "parentId": "11279",
            "avgRatingString": "4.2",
            "totalRatingsString": "8.0K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-05 01:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/live-kitchen-ashokapuram-nadakkave-mavoor-rest302440",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "74506",
            "name": "Falooda Nation",
            "cloudinaryImageId": "bb307b38b4babf5b2ba9f6461c718ae7",
            "locality": "Silk Street",
            "areaName": "Silk Street",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "20231",
            "avgRatingString": "4.3",
            "totalRatingsString": "11K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-05 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/falooda-nation-silk-street-rest74506",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "472537",
            "name": "Hive Honey Cake",
            "cloudinaryImageId": "zvytdpf3l8bimlo3njdz",
            "locality": "Manorama Cross Road",
            "areaName": "Bilathikkulam",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery"
            ],
            "avgRating": 4.8,
            "parentId": "270110",
            "avgRatingString": "4.8",
            "totalRatingsString": "748",
            "sla": {
                "deliveryTime": 14,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 21:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/hive-honey-cake-manorama-cross-road-bilathikkulam-rest472537",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "170148",
            "name": "Hotel Malabar",
            "cloudinaryImageId": "kp2jghi3pqqnzfu6kf10",
            "locality": "Mavoor Road",
            "areaName": "Govindapuram",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "South Indian",
                "Biryani"
            ],
            "avgRating": 4.1,
            "parentId": "4485",
            "avgRatingString": "4.1",
            "totalRatingsString": "8.8K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/hotel-malabar-mavoor-road-govindapuram-rest170148",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "826578",
            "name": "Pastas By Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/e77822ad-4e01-4a38-ae6b-f50cd19352dd_826578.JPG",
            "locality": "Indira Gandhi Road",
            "areaName": "Arayidathupalam",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pastas"
            ],
            "avgRating": 3.5,
            "parentId": "306806",
            "avgRatingString": "3.5",
            "totalRatingsString": "102",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/pastas-by-pizza-hut-indira-gandhi-road-arayidathupalam-rest826578",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "492470",
            "name": "Al Taza",
            "cloudinaryImageId": "70b9cb98b04d773417b77ee3c73910c9",
            "locality": "Red Cross Road",
            "areaName": "Vellayil",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Arabian"
            ],
            "avgRating": 4.6,
            "parentId": "405299",
            "avgRatingString": "4.6",
            "totalRatingsString": "3.6K+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/al-taza-red-cross-road-vellayil-rest492470",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "114245",
            "name": "Burger Lounge",
            "cloudinaryImageId": "zvdkit9zxqeresgyb8bj",
            "locality": "Bilathikulam Road",
            "areaName": "Nadakkav",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Burgers",
                "Ice Cream"
            ],
            "avgRating": 4.4,
            "parentId": "12757",
            "avgRatingString": "4.4",
            "totalRatingsString": "6.8K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-04 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹999",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/burger-lounge-bilathikulam-road-nadakkav-rest114245",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "288569",
            "name": "Tasty Hut",
            "cloudinaryImageId": "atikvzcn2kucbdyf1u5k",
            "locality": "Kunnamangalam",
            "areaName": "Medical College",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "North Indian",
                "South Indian",
                "Ice Cream",
                "Biryani"
            ],
            "avgRating": 4.1,
            "parentId": "20281",
            "avgRatingString": "4.1",
            "totalRatingsString": "9.1K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 6.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "6.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-05 01:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-55398e14-af14-454d-8dbd-bf24afc1cd02"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kozhikode/tasty-hut-kunnamangalam-medical-college-rest288569",
            "type": "WEBLINK"
        }
    }
]




const Body = () => {
    return (
        <div className="body">
            <div className="search-container">

                <input className="search-item" type="text" placeholder="Search restorent and food"></input>
                <button className="search-btn"><span class="material-symbols-outlined">
                    search
                </span></button>

            </div>
            <div className="card-container" >
                {
                    resList.map((item) => <RestaurantCard resData={item}/> )
                }
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
