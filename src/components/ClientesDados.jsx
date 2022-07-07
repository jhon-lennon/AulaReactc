import React from "react";
import clientes from "../dadosClientes/dadosClientes";

const ClientesDados = (props)=>{

    function clientess(){
    return clientes.map(cliente =>{
            return <li key={cliente.id_cliente}>Nome: {cliente.nome} | Email: {cliente.email}</li>
        })
    }

    return (
        <>
        <ul>
            {clientess()}
        </ul>
        </>
    )
}

export default ClientesDados