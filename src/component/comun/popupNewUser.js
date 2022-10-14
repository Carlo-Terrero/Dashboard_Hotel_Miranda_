import React, {useState} from 'react';
import Popup from 'reactjs-popup';

import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { postNewUser } from '../slice/userSlice';

const NewUser = styled.button`
    color: white;
    background: #013401;
    border: none;
    border-radius: 10px;
    width: 170px;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const DivFoto = styled.div`
    display: flex;
`;

const Form = styled.form`
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
                border: none;
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
`;

const BtnCancel = styled(BtnAceptar)`
    background: red;
    color: white;
    width: 1.5rem;
`;

const StyledPopup = styled(Popup)`
    &-overlay{
        width: 47rem;
        height: 470px;
        background-color: #b9b6b6;
        border-radius: 25px;
        margin: auto;
        border: 2rem;

        div{
            color: white;
        }
    }

`;

export const PopupNewUser = () =>{

    const dispatch = useDispatch();

    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [telefono, setTelefono] = useState();
    const [puesto, setPuesto] = useState('');
    const [alta, setAlta] = useState('');
    const [description, setDescription] = useState('');
    const [estado, setEstado] = useState();
    const [pass, setPass] = useState('');
    const [foto, setFoto] = useState('https://blogdestinia.com/wp-content/uploads/2019/06/parque-nacional-ba…');
    const [schedule, setSchedule] = useState('');

    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(true);

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
        
        console.log(User)
        dispatch(postNewUser(User))        
    }


    return(
        <StyledPopup trigger={<NewUser>+ New User</NewUser>}
            open={open}
            modal
            //onClose={closeModal}
        > 

            {close =>(                
                <Form onSubmit={handleSubmit}>
                    <h1>Insertar Nuevo Usuario</h1>

                    <div>
                        <label>
                            <p>Nombre</p>
                            <input value={newName} type="text" onChange={(e) => {setNewName(e.target.value)}} required/>
                        </label>

                        <label>
                            <p>Email</p>
                            <input value={newEmail} type="email" onChange={(e) => {setNewEmail(e.target.value)}} required/>
                        </label>
                    </div>


                    <div>
                        <label>
                            <p>Telefono</p>
                            <input value={telefono} type="numbre" onChange={(e) => {setTelefono(e.target.value)}} required/>
                        </label>

                        <label>
                            <p>Puesto</p>
                            <select value={puesto} onChange={(e) => {setPuesto(e.target.value)}} required>
                                <option value={"Manager"}>Manager</option>
                                <option value={"Recepción"}>Recepcionista</option>
                                <option defaultValue={"klk"} /* value={"Servicio de Habitaciones"} */>Servicio de Habitaciones</option>
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
                                <p>Url Foto</p> 
                                <input value={foto} type="text" onChange={(e) => {setFoto(e.target.value)}} required/>
                            </label>                            
                        </div>

                        <div>
                            <label>
                                <p>Schedule</p>
                                <input value={schedule} type="text" onChange={(e) => {setSchedule(e.target.value)}} required/>
                            </label>                                                        
                        </div>
                    </div>

                    <div>
                        <label>
                            <p>Estado</p> 
                            <select value={estado} onChange={(e) => {setEstado(e.target.value)}} required>
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
                        <BtnAceptar type="submit"  /* onClick={() => {close()}} */>Insertar</BtnAceptar>
                        <BtnCancel /* onClick={() => {close()}} */> X </BtnCancel>
                    </div>


                </Form>
            )}
        </StyledPopup>
    )
}