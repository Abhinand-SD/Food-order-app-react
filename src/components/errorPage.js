import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {

    const err = useRouteError();
    console.log(err)
    return (
        <div className="error-page-container">
            <div className="error-page-box">
                <h1>We'll be back shortly</h1>
                <h5>We are fixing a temporary glitch. Sorry for the inconvenience.</h5>
                {/* <h1>{err.status} {err.statusText}</h1> */}
                <Link to="/" className="home-btn">Go back</Link>

            </div>
        </div>
    )
}

export default Error;