import React, { useContext } from "react"
import { LogingContext } from "../App"

export const User = () =>{

    const dataUser = useContext(LogingContext);

    
    return (
        <div>
            Nombre de usuario: {dataUser.name}
            <br/>
            Correo del usuario: {dataUser.email} 
            <br/>
            Estado de la cuenta {dataUser.auth ? 'Activa' : 'IN-ACTIVA'}
        </div>
    )
}