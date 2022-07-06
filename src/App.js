import React from "react";
import Texto from "./components/Texto";
import Coments from "./components/Coments";

function App(){

    return(
        <div>
            <h1>Comentarios</h1>
            <Coments titulo="coment um" autor="jhon"/>
            <Coments titulo="coment dois" autor="livia"/>
            <Coments titulo="coment tres" autor="amanda"/>


        </div>
    )
}
export default App