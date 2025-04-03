import { useContext } from "react"
import UserContext from "../utils/userContext"

const Contact = () => {

    const{login, setUserLog} = useContext(UserContext)

    return (
        <div>
            <div className="flex justify-center">
            <h1 className="text-3xl font-bold mt-12">Contact</h1>
            <input value={login} onChange={(e)=> setUserLog(e.target.value)}></input>

            </div>
        </div>

    )
}

export default Contact