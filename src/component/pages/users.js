import React, { useContext } from "react"
import { LogingContext } from "../App"

export const User = () =>{

    const dataUser = useContext(LogingContext);

    
    return (
        <div>
            Mi nombre es {dataUser.name}
            <br/>
            Mi correo es {dataUser.email} 
            <br/>
            Estado {dataUser.auth ? 'activa' : 'in-activo'}
        </div>
    )
}