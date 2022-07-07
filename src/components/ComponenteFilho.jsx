import React from "react";
import './Coments.css'

const ComponenteFilho = (props)=>{

    return (
        
        <div className="coments">
        <p className="titulo">Titulo: {props.titulo}</p>
        <p className="texto">texto: {props.texto}</p>
        <p>Nome: {props.children}</p>
        
        </div>
    )

}

export default ComponenteFilho