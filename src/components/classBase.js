import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count :0
        }
        console.log("chilld constractor")
    }

    componentDidMount(){
        console.log(this.props.name+"chilld DidMount")
    }

    render(){
        console.log(this.props.name + "chilld render")
        const {name, position} = this.props
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1
                    })
                }} >click me</button>
                <h2>{name}</h2>
                <h2>{position}</h2>
            </div>
        )
    }
}

export default UserClass;