import React from "react";
import './Coments.css'
import ComponenteUm from "./ComponenteUm";

function Coments(props){
    function maiusculo(texto){
        return texto.toUpperCase()
    }
    return(
        <section className="coments">
            <p className="titulo">{maiusculo( props.titulo)}</p>
            <p className="texto">texto</p>
         <ComponenteUm>
            <a href="">teste</a>
         </ComponenteUm>
            <p className="author">{props.autor}</p>
            {props.children}


            

        </section>
    )
}

export default Coments