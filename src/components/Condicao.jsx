import React from "react";

const Codicao = (props) =>{

    function condic(valor){
        if(valor){
            return <p>verdadeiro</p>
        }else{
            return <p>falso</p> 
            
        }
    }
    return(
        condic(props.cond)
    )

}

export default Codicao