import React, {useState, useContext } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { NewUser } from '../newElement/newUser';
import {LogingContext} from '../App'
import styled from 'styled-components';

const Div =  styled.div` 
    padding-top: 2rem;
    display: grid;
    background: white;  
    width: 40rem;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 3rem 25%;
    border: 0.5px solid #80808038;
`;

const Form = styled.form`
    display: grid;
    
    align-items: center;
    justify-content: center;

    h1{
        text-align: center;
    }

    div{
        display: flex;
        gap: 3rem;
        margin-bottom: 1rem;

        img{
            background-repeat: round;
            height: 12rem;
            border-radius: 8px;
        }

        div{
            margin-left: auto;
            display: grid;
            gap: 1rem;
        }

        label{

            p{
                margin: 0.5rem;
            }

            input, select{
                width: 15rem;
                border-radius: 0.5rem;
                border: 0.5px solid #80808070;
            }
        }
    }
`;

const BtnAceptar = styled.button`
    margin-top: 1rem;
    width: 5rem;
    height: 1.5rem;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    background: green;
    color: white;
`;

const BtnCancel = styled(BtnAceptar)`
    background: red;
`;

const DivButton = styled.div`
    margin: -3.5rem 0 2rem auto;
    display: flex;
    gap: 2rem;
`;

export const UserEdit = (props) =>{

    //Hay que traer los datos el usuario y ponerlos aqui
    const dataUser = useContext(LogingContext);
    console.log(dataUser)
    
    const [newName, setNewName] = useState(dataUser.user);
    const [newEmail, setNewEmail] = useState(dataUser.email);
    const [telefono, setTelefono] = useState(629228654);
    const [puesto, setPuesto] = useState('Manager');
    const [alta, setAlta] = useState('24/05/2022');
    const [description, setDescription] = useState('Esta es una breve y resumida declaracion para las cosas que se ponen duras');
    const [state, setState] = useState(true);
    const [pass, setPass] = useState('pass');
    const [foto, setFoto] = useState(dataUser.foto);
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
            estate: state,
            password: pass
        }

        console.log(User)
    }

    const handleSubmit = () =>{

    }

    return (
        <Div>
            <Form onSubmit={handleSubmit}>
                {/* <h1>Añadir Nuevo Usuario</h1> */}
                <h1>Usuario logueado</h1>

                <div>
                    <img src={`${foto}`} alt='imagen user'/>

                    <div>
                        <label>
                            <p>Url img Usuario</p>
                            <input value={foto} type="text" onChange={(e) => {setFoto(e.target.value)}} required/>
                        </label>

                        <label>
                            <p>Nombre</p>
                            <input value={newName} type="text" onChange={(e) => {setNewName(e.target.value)}} required/>
                        </label>

                        <label>
                            <p>Email</p>
                            <input value={newEmail} type="email" onChange={(e) => {setNewEmail(e.target.value)}} required/>
                        </label>
                    </div>
                    
                </div>

                <div>
                    <label>
                        <p>Telefono</p>
                        <input value={telefono} type="numbre" onChange={(e) => {setTelefono(e.target.value)}} required/>
                    </label>

                    <label>
                        <p>Puesto</p>
                        <select value={puesto} onChange={(e) => {setPuesto(e.target.value)}} required>
                            <option >Seleccione puesto</option>
                            <option value={"Servicio de Habitaciones"} >Servicio de Habitaciones</option>
                            <option value={"Manager"}>Manager</option>
                            <option value={"Recepción"}>Recepcionista</option>
                        </select>
                    </label>
                </div>                

                <div>
                    <label>
                        <p>Fecha Alta</p>
                        <input value={alta} type="date" onChange={(e) => {setAlta(e.target.value)}} required/>
                    </label>

                    <label>
                        <p>Descripción de puesto</p>
                        <input value={description} type="textarea" onChange={(e) => {setDescription(e.target.value)}} required/>
                    </label>
                </div>

                <div>

                    <label>
                        <p>Día de guardia</p>
                        {/* <input value={schedule} type="text" onChange={(e) => {setSchedule(e.target.value)}} required/> */}
                        {/* <select value={schedule} type="text" onChange={(e) => {setSchedule(e.target.value)}}  required>
                            <option > Seleccione día </option>
                            <option value={"Lunes "}> Lunes </option>
                            <option value={"Martes "}> Martes </option>
                            <option value={"Miercoles "}> Miercoles </option>
                            <option value={"Jueves "}> Jueves </option>
                            <option value={"Viernes "}> Viernes </option>
                            <option value={"Sábado "}> Sábado </option>
                            <option value={"Domingo "}> domingo </option>
                        </select> */}
                    </label>                                                                            

                    <label>
                        <p>Estado</p> 
                        <select value={state} type="text" onChange={(e) => {setState(e.target.value)}} required>
                            <option > Seleccione estado </option>
                            <option value={"true"} >Activo</option>
                            <option value={"false"}>In-Activo</option>
                        </select>
                    </label>

                </div>

                <div>

                    <label >
                        <p>Password</p> 
                        {/* {validador ? 
                            <input  value={pass} type="password" onChange={(e) => {setPass(e.target.value)}} disabled/> : 
                            <input  value={pass} type="password" onChange={(e) => {setPass(e.target.value)}} />} */}
                    </label>

                    
                </div>

                <DivButton>
                    {/* <BtnAceptar type="submit" >{validador ? 'Actualizar' : 'Añadir'}</BtnAceptar> */}
                    <BtnCancel /* onClick={() => {close()}} */> Cancelar </BtnCancel>
                </DivButton>

            </Form>
        </Div>
    )
}