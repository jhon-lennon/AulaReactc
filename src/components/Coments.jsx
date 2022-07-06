import React from "react";
import './Coments.css'

function Coments(props){
    function maiusculo(texto){
        return texto.toUpperCase()
    }
    return(
        <section className="coments">
            <p className="titulo">{maiusculo( props.titulo)}</p>
            <p className="texto">texto</p>
            <p className="author">{props.autor}</p>

        </section>
    )
}

export default Coments