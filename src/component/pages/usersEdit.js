import React, {useState, useContext } from "react";
import {useSelector, useDispatch} from 'react-redux';

import {
    addUser,
    deleteUser,
    editUser,
    getOneUser,
} from '../slice/pruebaSinUso';

export const UserEdit = (props) =>{

    const [newName, setNewName] = useState('')
    const [newEmail, setNesEmail] = useState('')
    //const dataUser = useContext(LogingContext);

    const dispatch = useDispatch();

    const handleClickChance = () => {

        if(newName.length > 0){
            props.dispatch({type: 'NAME', value: newName})
        }
        
        if(newEmail.length > 0){
            props.dispatch({type: 'EMAIL', value: newEmail})
        }        
        
        console.log('clickcado')
    }

    const handleDate = () => {
        console.log('Data User');
        dispatch(addUser());
        dispatch(deleteUser());
        dispatch(editUser());
        dispatch(getOneUser())
    }

    return (
        <div>
           {/*  <div>
                Nombre de usuario: {dataUser.name}
                <br/>
                Correo del usuario: {dataUser.email} 
                <br/>
                Estado de la cuenta {dataUser.auth ? 'Activa' : 'IN-ACTIVA'}
            </div> */}
            
            <div>
                <label>
                    <p>Definir una nueva página en Whimsical que sea el formulario de alta de un empleado.</p>
                    <p>- Foto</p>
                    <p>- Nombre completo</p>
                    <p>- Puesto (drop down con tres opciones: Manager, Recepción y Servicio de Habitaciones)</p>
                    <p>- Email</p>
                    <p>- Número de teléfono</p>
                    <p>- Start Date (Fecha de alta)</p>
                    <p>- Descripción de funciones</p>
                    <p>- Estado (Activo verde / Inactivo rojo)</p>
                    <p>- Password (guardado como hash)</p>
                    /////////////////////////////////
                    <p>Nuevo nombre</p>
                    <input type='text' value={newName} onChange={(e) => {setNewName(e.target.value)}}/>
                </label>

                <label>
                    <p>Nuevo email</p>
                    <input type="email" value={newEmail} onChange={(e) => {setNesEmail(e.target.value)}} />
                </label>
                
                <button onClick={() => handleClickChance()}>Cambiar Datos</button>
            </div>

            <button onClick={handleDate}>Infor por consola</button>

        </div>
    )
}