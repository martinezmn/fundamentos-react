import React from "react"
import './app.css'

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"

export default props =>
    <div className="app">
        <h1>Fundamento React</h1>

        <div className="cards">
            <Card titulo="Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome="Gabriel" />
                </Familia>
            </Card>

            <Card titulo="Número aleatório" color="#FA6900">
                <Aleatorio min={500} max={100} />
            </Card>

            <Card titulo="Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="Com parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Gabriel"
                    nota={9.3} />
            </Card>

            <Card titulo="Primeiro" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>