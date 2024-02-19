import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

import moment from "moment";

import styled from "styled-components";

import { useDispatch, useSelector } from 'react-redux';
import { postNewUser, updateOneUser, getOneUser, usersListDate} from '../slice/userSlice';

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

export const NewUser = (props) =>{

    const {id} = useParams();
    const user = useSelector(usersListDate);
    const userSelected =  user.find(user => user._id === id)

    const validador = id ? true : false
    const dispatch = useDispatch();
    
    const [newName, setNewName] = useState(validador  ? userSelected.name : '');
    const [newEmail, setNewEmail] = useState(validador ? userSelected.email : '');
    const [telefono, setTelefono] = useState(validador ? userSelected.contact : '');
    const [puesto, setPuesto] = useState(validador ? userSelected.puesto : '');
    const [alta, setAlta] = useState(validador ? moment(userSelected.start_date).format('yyyy-MM-dd') : '');
    const [description, setDescription] = useState(validador ? userSelected.description : '');
    const [estado, setEstado] = useState(validador ? userSelected.estate : '');
    const [pass, setPass] = useState('');
    const [foto, setFoto] = useState(validador ? userSelected.foto : 'https://i.blogs.es/808765/dpoty-puppy-2nd--c--tracy-kirby-the-kennel-club-2/1366_2000.jpg');
    const [schedule, setSchedule] = useState(validador ? userSelected.schedule : '');

    useEffect(() => {
        dispatch(getOneUser(id))
    },[])

    const handleSubmit = (e) => {

        e.preventDefault();

        const User = {
            name: newName,
            email: newEmail,
            contact: telefono,
            puesto: puesto,
            start_date: alta,
            description: description,
            estate: estado,
            password: validador ? user.password : pass,
            schedule: schedule,
            foto: foto,
        }
        
        //dispatch(postNewUser(User))
        validador ? dispatch(updateOneUser({id: id, obj: User})) : dispatch(postNewUser(User));
    }
    
    return(
        <Div>
            <Form onSubmit={handleSubmit}>
                {/* <h1>Añadir Nuevo Usuario</h1> */}
                <h1>{validador ? props.user.title : 'Crear usuario'}</h1>

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
                        <select value={schedule} type="text" onChange={(e) => {setSchedule(e.target.value)}}  required>
                            <option > Seleccione día </option>
                            <option value={"Lunes "}> Lunes </option>
                            <option value={"Martes "}> Martes </option>
                            <option value={"Miercoles "}> Miercoles </option>
                            <option value={"Jueves "}> Jueves </option>
                            <option value={"Viernes "}> Viernes </option>
                            <option value={"Sábado "}> Sábado </option>
                            <option value={"Domingo "}> domingo </option>
                        </select>
                    </label>                                                                            

                    <label>
                        <p>Estado</p> 
                        <select value={estado} type="text" onChange={(e) => {setEstado(e.target.value)}} required>
                            <option > Seleccione estado </option>
                            <option value={"true"} >Activo</option>
                            <option value={"false"}>In-Activo</option>
                        </select>
                    </label>

                </div>

                <div>

                    <label >
                        <p>Password</p> 
                        {validador ? 
                            <input  value={pass} type="password" onChange={(e) => {setPass(e.target.value)}} disabled/> : 
                            <input  value={pass} type="password" onChange={(e) => {setPass(e.target.value)}} />}
                    </label>

                    
                </div>

                <DivButton>
                    <BtnAceptar type="submit" >{validador ? 'Actualizar' : 'Añadir'}</BtnAceptar>
                    <BtnCancel /* onClick={() => {close()}} */> Cancelar </BtnCancel>
                </DivButton>

            </Form>
        </Div>
    )
}