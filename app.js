import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (
        <h1>Hello World..!</h1>
    )
}
root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Title />)