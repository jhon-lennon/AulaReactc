import React from "react";
import ComponenteFilho from "./ComponenteFilho";
import './Coments.css'

const ComponentePai = (props)=>{

    return (
        
        <div className="coments">
        <p className="titulo">Titulo: {props.titulo}</p>
        <p className="texto">texto: {props.texto}</p>
        <ComponenteFilho titulo="filho" texto="componente filho">
            joao
        </ComponenteFilho>

        <ComponenteFilho titulo="filho" texto="componente filho">
            jose
        </ComponenteFilho>

        <ComponenteFilho titulo="filho" texto="componente filho">
            pedro
        </ComponenteFilho>
        
        </div>
    )

}

export default ComponentePai