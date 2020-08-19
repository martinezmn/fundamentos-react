import React from "react"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"

export default props =>
    <div id="app">
        <h1>Fundamento React</h1>
        <Card titulo="Número aleatório">
            <Aleatorio min={500} max={100} />
        </Card>

        <Card titulo="Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="Com parâmetro">
            <ComParametro
                titulo="Situação do aluno"
                aluno="Gabriel"
                nota={9.2} />
        </Card>

        <Card titulo="Primeiro">
            <Primeiro></Primeiro>
        </Card>

    </div>