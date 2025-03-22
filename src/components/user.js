import { useEffect, useState } from "react"

const User = (props) =>{

    const [userInfo, setUserInfo] = useState({})

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData =  async() => {
        const data = await fetch("https://api.github.com/users/Abhinand-SD")
        const json = await data.json();

        setUserInfo(json)
        console.log(json)
        
        
    }

    return (
        <div className="user_container">
          <img className="user_img" src={userInfo.avatar_url} ></img>
          <p>{userInfo.name}</p>
          <p>{userInfo.bio}</p>  
        </div>
    )
}

export default User