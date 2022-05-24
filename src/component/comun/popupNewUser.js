import React, {useState} from 'react';
import Popup from 'reactjs-popup';

import styled from 'styled-components';

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
        background-color: #FFFFFF;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23FFFFFF' cx='50' cy='0' r='50'/%3E%3Cg fill='%23f6f6f6' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ededed' cx='50' cy='100' r='50'/%3E%3Cg fill='%23e4e4e4' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23dbdbdb' cx='50' cy='200' r='50'/%3E%3Cg fill='%23d2d2d2' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c9c9c9' cx='50' cy='300' r='50'/%3E%3Cg fill='%23c0c0c0' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23b7b7b7' cx='50' cy='400' r='50'/%3E%3Cg fill='%23aeaeae' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a6a6a6' cx='50' cy='500' r='50'/%3E%3Cg fill='%239d9d9d' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23959595' cx='50' cy='600' r='50'/%3E%3Cg fill='%238d8d8d' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23848484' cx='50' cy='700' r='50'/%3E%3Cg fill='%237c7c7c' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23747474' cx='50' cy='800' r='50'/%3E%3Cg fill='%236c6c6c' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23646464' cx='50' cy='900' r='50'/%3E%3Cg fill='%235d5d5d' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23555555' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: contain;;
        border-radius: 25px;
        margin: auto;
        border: 2rem;

        div{
            color: white;
        }
    }

`;

export const PopupNewUser = () =>{

    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [telefono, setTelefono] = useState();
    const [puesto, setPuesto] = useState('');
    const [alta, setAlta] = useState('');
    const [description, setDescription] = useState('');
    const [estado, setEstado] = useState();
    const [pass, setPass] = useState('');
    const [foto, setFoto] = useState('https://blogdestinia.com/wp-content/uploads/2019/06/parque-nacional-ba…');

    const [open, setOpen] = useState(false);

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

    const closeModal = () => setOpen(false);

    return(
        <StyledPopup trigger={<NewUser>+ New User</NewUser>}
            open={open}
            modal
            onClose={closeModal}
        > 

            {close =>(                
                <Div>
                    <h1>Insertar de Usuario</h1>

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
                            <input value={telefono} type="numbre" onChange={(e) => {setTelefono(e.target.value)}}/>
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
                            <input value={description} type="textarea" onChange={(e) => {setDescription(e.target.value)}} />
                        </label>
                    </div>

                    <div>
                        <DivFoto>
                            <p>Url Foto</p> 
                            <input value={foto} type="text" onChange={(e) => {setFoto(e.target.value)}}/>
                        </DivFoto>
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
                    {/*  <button onClick={() => handleClickChance()}>Cambiar Datos</button> */}

                        <BtnAceptar type={"submit"} onClick={() => {handleDate(); close()}}>Insertar</BtnAceptar>
                        <BtnCancel onClick={() => {close()}}>X</BtnCancel>
                    </div>


                </Div>
            )}
        </StyledPopup>
    )
}