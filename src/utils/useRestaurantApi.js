import { useEffect, useState } from "react";
import { RESTA_INFO, RESTA_MENU } from "./constants";

export const useRestaurantInfo = () => {

    const [listOfRestaurants, setList] = useState([])
    const [filteredRest, setFilterdRest] = useState([])

    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTA_INFO)

        const json = await data.json()

        setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterdRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    return { listOfRestaurants, filteredRest, setFilterdRest }
}

export const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData()

    }, [])

    const fetchData = async () => {
        const data = await fetch(RESTA_MENU + resId)
        const json = await data.json()
        setResInfo(json);
    }

    return resInfo
}