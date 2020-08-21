import "./Card.css"
import React from "react"

export default props => {
    const {titulo, color} = props

    const cardStyle = {
        backgroundColor: color || '#F00',
        borderColor: color || '#F00'
    }
    
    return (
        <div className="card" style={cardStyle}>
            <div className="title">{titulo}</div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}