import UserClass from "./classBase"
import User from "./user"

import React from "react"

class About extends React.Component {
    constructor(props) {
        super(props)



    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="about_container">
                <User />
            </div>
        )
    }
}

export default About