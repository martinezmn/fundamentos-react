import React from "react"

export default props => {
    const { min, max } = props
    const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <div>
            <h1>Número aleatório</h1>
            <p>
                Foi gerado o número <strong>{aleatorio}</strong>
            </p>
        </div>
    )
}