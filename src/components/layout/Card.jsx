import "./Card.css"
import React from "react"

export default props => {
    const { titulo } = props
    return (
        <div className="card">
            <div className="title">{titulo}</div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}