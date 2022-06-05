import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import styled from "styled-components";
import { REACT_APP_LINK_LOGIN } from '../../env';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DivBase = styled.div`
    background-image: url(https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_960_720.jpg);
    background-size: cover;
    width: 100%;
    height: 94.2vh;
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
        width: 150px;
        margin: auto;
    }
`;

export const Auth = (props) => {
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');   
    //const [token, setToken] = useState('')

    const navigate =  useNavigate();

    async function logUser() {
        try {
          const response = await axios.post(`${REACT_APP_LINK_LOGIN}`,{userName: email, password: pass});
          //console.log(response.data.token);
          
          const token = response.data.token;
          console.log(token)
          localStorage.setItem('Token', token);
          const decode = jwt_decode(token);          
          const user = decode.user;
            //console.log(user)
               // {type:"action Login", 
              // value: {name: user.name, email: user.email, auth:true}}
          props.dispatch(
            {type: 'LOGIN', value: {auth: true, user: user.name, email: user.email}}          
          )


          navigate('/dashboard');
        } catch (error) {
          alert('Caracteres incorrectos')
          //<msnError/>
          {/* <ToastContainer /> */}
        }
    }

   /*  function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }; */

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
                    <input className='mail' type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <label>
                    <p>Pasword:</p>
                    <input className='pass' type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                </label>

                <button className='sumit' type="submit">sumit</button>
            </Form>
                                                  
        </DivBase>
    )
}