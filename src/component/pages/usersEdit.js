import React, {useState, useContext } from "react";
import {useSelector, useDispatch} from 'react-redux';

import {
    addUser,
    deleteUser,
    editUser,
    getOneUser,
} from '../slice/pruebaSinUso';

import styled from 'styled-components';

const Div = styled.div`
    display: grid;
    padding: 0 3rem;
    width: 40rem;
    align-items: center;
    justify-content: center;

    h1{
        text-align: center;
    }

    div{
        display: flex;
        gap: 3rem;

        label{
            input{
                width: 15rem;
                heigth: 3rem;
            }
        }
    }

    button{
        margin-top: 1rem;
        width: 10rem;
    }
`;

export const UserEdit = (props) =>{

    const [newName, setNewName] = useState('Carlos Terrero');
    const [newEmail, setNewEmail] = useState('Carlos@gmail.com');
    const [telefono, setTelefono] = useState(629228654);
    const [puesto, setPuesto] = useState('Manager');
    const [alta, setAlta] = useState('24/05/2022');
    const [description, setDescription] = useState('Esta es una breve y resumida declaracion para las cosas que se ponen duras');
    const [estado, setEstado] = useState(true);
    const [pass, setPass] = useState('pass');
    //const dataUser = useContext(LogingContext);

    const dispatch = useDispatch();

    const handleClickChance = () => {

        if(newName.length > 0){
            props.dispatch({type: 'NAME', value: newName})
        }
        
        if(newEmail.length > 0){
            props.dispatch({type: 'EMAIL', value: newEmail})
        }        
        
    }

    const handleDate = () => {
        /* console.log('Data User');
        dispatch(addUser());
        dispatch(deleteUser());
        dispatch(editUser());
        dispatch(getOneUser()) */

        const User = {
            nombre: newName,
            email: newEmail,
            contact: telefono,
            puesto: puesto,
            start_date: alta,
            description: description,
            estate: estado,
            password: pass
        }

        console.log(User)
    }

    return (
        <Div>

            <h1>Actualizacion de Usuario</h1>

            <div>
                <label>
                    <p>Nombre</p>
                    <input value={newName} type="text" onChange={(e) => {setNewName(e.target.value)}} />
                </label>

                <label>
                    <p>Email</p>
                    <input value={newEmail} type="email" onChange={(e) => {setNewEmail(e.target.value)}} />
                </label>
            </div>
            
            
            <div>
                <label>
                    <p>Telefono</p>
                    <input value={telefono} type="numbre" onChange={(e) => {setTelefono(e.target.value)}} />
                </label>

                <label>
                    <p>Puesto</p>
                    <select value={puesto} onChange={(e) => {setPuesto(e.target.value)}}>
                        <option value={"Manager"}>Manager</option>
                        <option value={"Recepción"}>Recepcionista</option>
                        <option value={"Servicio de Habitaciones"}>Servicio de Habitaciones</option>
                    </select>
                </label>
            </div>                

            <div>
                <label>
                    <p>Fecha Alta</p>
                    <input value={alta} type="text" onChange={(e) => {setAlta(e.target.value)}} />
                </label>

                <label>
                    <p>Descripción de puesto</p>
                    <input value={description} type="textArea" onChange={(e) => {setDescription(e.target.value)}} />
                </label>
            </div>
            
            <div>
                <label>
                    <p>Estado</p> 
                    <select value={estado}>
                        <option value={"true"}>Activo</option>
                        <option value={"false"}>In-Activo</option>
                    </select>
                </label>

                <label>
                    <p>Password</p> 
                    <input value={pass} type="password" onChange={(e) => {setPass(e.target.value)}} />
                </label>
            </div>

            <div>
                <button onClick={() => handleClickChance()}>Cambiar Datos</button>

                <button onClick={handleDate}>Infor por consola</button>
            </div>
            

        </Div>
    )
}