import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import styled from "styled-components";
import { REACT_APP_LINK_HTTP } from '../../env';

import 'react-toastify/dist/ReactToastify.css';
const DivBase = styled.div`
    background-image: url(https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_960_720.jpg);
    background-size: cover;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Div = styled.div` 
    
    margin-top: 15%;
    padding-bottom: auto;
    background: none;
`;

const Form = styled.form`
    display: grid;
    gap: 1rem;
    border-radius: 15px;
    width: 300px;
    border: black 0.1rem solid;
    background: #cb868673;
    height: 16rem;

    label {
        display: grid;       
        margin: 0.7rem;
        gap: 0.5rem;

        p{
            margin: 0;
            color: white;
            font-size: 1.3rem;
        }

        input {
            border-radius: 5px;
            border: none;
            height: 1.3rem;
            border: black 0.1rem solid;
        }        
    }

    button {
        width: 80px;
        margin: auto;
        border-radius: 6px;
    }
`;

export const Auth = (props) => {
    
    const [email, setEmail] = useState('Carlos');
    const [pass, setPass] = useState('ponko');   

    const navigate =  useNavigate();

    async function logUser() {
        try {
          const response = await axios.post(`${REACT_APP_LINK_HTTP}/login`,{userName: email, password: pass});
          
          const token = response.data.token;
          localStorage.setItem('Token', token);
          const decode = jwt_decode(token);          
          const user = decode.user;

          props.dispatch(
            {type: 'LOGIN', value: {auth: true, 
                                    user: user.name, 
                                    email: user.email, 
                                    foto: user.foto ,
                                    id: user.id,
                                    contact: user.contact,
                                    description: user.description,
                                    state: user.state,
                                    puesto: user.puesto,
                                    start_date: user.start_date,
                                }}          
          )

          navigate('/dashboard');
        } catch (error) {
          alert('Caracteres incorrectos');
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (email && pass ){
            logUser()
            
        }else{
            alert('Caracteres no coinciden')
        }         
                        
    }

    
    return (
        <DivBase>                
            <Form onSubmit={handleSubmit}>
                <label>                                        
                    <p>User:</p>                        
                    <input className='text' type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <label>
                    <p>Password:</p>
                    <input className='pass' type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                </label>

                <button className='sumit' type="submit">submit</button>
            </Form>
                                                  
        </DivBase>
    )
}