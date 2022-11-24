import React, {useState} from "react";

import styled from "styled-components";

import { useDispatch } from 'react-redux';
import { postNewUser } from '../slice/userSlice';

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
            height: 10rem;
            border-radius: 8px;
        }

        divTriple{
            margin-left: auto;
        }

        label{

            p{
                margin: 0.5rem;
            }

            input{
                width: 15rem;
                border-radius: 0.5rem;
                border: 0.5px solid #80808070;
            }
        }

        
    }

    divButton{
        margin: -3.5rem 0 2rem auto;
        display: flex;
        gap: 2rem;
    }

 
`;

const BtnAceptar = styled.button`
    margin-top: 1rem;
    width: 5rem;
    height: 1.5rem;
    border-radius: 25px;
    border: none;
    cursor: pointer;
`;

const BtnCancel = styled(BtnAceptar)`
    background: red;
    color: white;
`;


export const NewUser = () =>{

    const dispatch = useDispatch();

    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [telefono, setTelefono] = useState();
    const [puesto, setPuesto] = useState('');
    const [alta, setAlta] = useState('');
    const [description, setDescription] = useState('');
    const [estado, setEstado] = useState();
    const [pass, setPass] = useState('');
    const [foto, setFoto] = useState('https://i.blogs.es/808765/dpoty-puppy-2nd--c--tracy-kirby-the-kennel-club-2/1366_2000.jpg');
    const [schedule, setSchedule] = useState('');

 /*    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(true); */

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
            password: pass,
            schedule: schedule,
            foto: foto,
        }
        
        //console.log(User)
        dispatch(postNewUser(User))        
    }
    
    return(
        <Div>
            <Form onSubmit={handleSubmit}>
                <h1>Insertar Nuevo Usuario</h1>

                <div>
                    <img src={`${foto}`} alt='imagen user'/>

                    <divTriple>
                        <label>
                            <p>Url img</p>
                            <input value={foto} type="email" onChange={(e) => {setFoto(e.target.value)}} required/>
                        </label>

                        <label>
                            <p>Nombre</p>
                            <input value={newName} type="text" onChange={(e) => {setNewName(e.target.value)}} required/>
                        </label>

                        <label>
                            <p>Email</p>
                            <input value={newEmail} type="email" onChange={(e) => {setNewEmail(e.target.value)}} required/>
                        </label>
                    </divTriple>
                    
                </div>



                <div>
                    <label>
                        <p>Telefono</p>
                        <input value={telefono} type="numbre" onChange={(e) => {setTelefono(e.target.value)}} required/>
                    </label>

                    <label>
                        <p>Puesto</p>
                        <select value={puesto} onChange={(e) => {setPuesto(e.target.value)}} required>
                            <option defaultValue={"Servicio de Habitaciones"} /* value={"Servicio de Habitaciones"} */>Servicio de Habitaciones</option>
                            <option value={"Manager"}>Manager</option>
                            <option value={"Recepción"}>Recepcionista</option>
                        </select>
                    </label>
                </div>                

                <div>
                    <label>
                        <p>Fecha Alta</p>
                        <input value={alta} type="text" onChange={(e) => {setAlta(e.target.value)}} required/>
                    </label>

                    <label>
                        <p>Descripción de puesto</p>
                        <input value={description} type="textarea" onChange={(e) => {setDescription(e.target.value)}} required/>
                    </label>
                </div>

                <div>

                    <div>
                        <label>
                            <p>Horario</p>
                            <input value={schedule} type="text" onChange={(e) => {setSchedule(e.target.value)}} required/>
                        </label>                                                        
                    </div>

                    <label>
                        <p>Estado</p> 
                        <select value={estado} onChange={(e) => {setEstado(e.target.value)}} required>
                            <option value={"true"}>Activo</option>
                            <option value={"false"}>In-Activo</option>
                        </select>
                    </label>

                </div>

                <div>

                    <label>
                        <p>Password</p> 
                        <input value={pass} type="password" onChange={(e) => {setPass(e.target.value)}} />
                    </label>

                    
                </div>

                <divButton>
                    <BtnAceptar type="submit"  /* onClick={() => {close()}} */>Insertar</BtnAceptar>
                    <BtnCancel /* onClick={() => {close()}} */> Cancelar </BtnCancel>
                </divButton>

            </Form>
        </Div>
    )
}