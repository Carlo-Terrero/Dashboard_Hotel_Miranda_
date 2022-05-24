import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

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

    const navigate =  useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (email === "carlos@gmail.com" && pass === "ponko"){
            props.dispatch({type: 'NAME', value: 'Tego Calderon'});
            props.dispatch({type: 'EMAIL', value: 'tego@calderon.com'})
            props.dispatch({type: 'AUTH', value: true})
            
            navigate('/dashboard');
            
        }else{
            alert('Caracteres no coinciden')
        }
                        
    }

    return (
        <DivBase>                
                <Form onSubmit={handleSubmit}>
                    <label>
                        <p>Email:</p>                        
                        <input className='mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>                        
                    </label>

                    <label>
                        <p>Pasword:</p>
                        <input className='pass' type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                    </label>

                    <button className='sumit' type="submit">sumit</button>
                </Form>
               
               {/*  <p>hols {props.auth === true ? 'in' : 'out'}</p>
                <p>Email: carlos@gmail.com</p>
                <p>Pass: ponko</p> */}                            
        </DivBase>
    )
}