import React from "react"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"

export default props =>
    <div id="app">
        <h1>Fundamento React</h1>
        <Aleatorio min={500} max={100} />
        <Fragmento />
        <ComParametro
            titulo="Situação do aluno"
            aluno="Gabriel"
            nota={9.2} />
        <Primeiro></Primeiro>
    </div>