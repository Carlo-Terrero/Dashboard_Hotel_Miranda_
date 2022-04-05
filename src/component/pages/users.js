import React, {useState, useContext } from "react";
import { LogingContext } from "../App";

export const User = (props) =>{

    const [newName, setNewName] = useState('')
    const [newEmail, setNesEmail] = useState('')
    const dataUser = useContext(LogingContext);

    const handleClickChance = () => {

        if(newName.length > 0){
            props.dispatch({type: 'NAME', value: newName})
        }
        
        if(newEmail.length > 0){
            props.dispatch({type: 'EMAIL', value: newEmail})
        }        
        
        console.log('clickcado')
    }

    /* console.log(newName)
    console.log(newEmail) */

    return (
        <div>
            <div>
                Nombre de usuario: {dataUser.name}
                <br/>
                Correo del usuario: {dataUser.email} 
                <br/>
                Estado de la cuenta {dataUser.auth ? 'Activa' : 'IN-ACTIVA'}
            </div>
            
            <div>
                <label>
                    <p>Nuevo nombre</p>
                    <input type='text' value={newName} onChange={(e) => {setNewName(e.target.value)}}/>
                </label>

                <label>
                    <p>Nuevo email</p>
                    <input type="email" value={newEmail} onChange={(e) => {setNesEmail(e.target.value)}} />
                </label>
                
                <button onClick={() => handleClickChance()}>Cambiar Datos</button>
            </div>

            
            
        </div>
    )
}