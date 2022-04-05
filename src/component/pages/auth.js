import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";


const DivBase = styled.div`
    width: auto;
    heigth: 300px;
`;

const Div = styled(DivBase)` 
    margin-left: 300px;
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
    

    label {
        display: grid;       
        margin: 0.7rem;
        gap: 0.5rem;

        p{
            margin: 0;
            color: black;
            font-size: 1.3rem;
        }

        input {
            border-radius: 5px;
            border: none;
            height: 1.3rem;
            border: black 0.1rem solid;
        }

        button 
        
    }
`;



export const Auth = (props) => {
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');   
    /* const [auth, setAuth] = useState(false); */

    const navigate =  useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (email === "carlos@gmail.com" && pass === "ponko"){
            props.setAuth(true);
            navigate('/dashboard');
            
        }else{
            alert('Caracteres no coinciden')
        }
                        
    }

    return (
        <DivBase>
            <Div>
                
                <Form onSubmit={handleSubmit}>
                    <label>
                        <p>Email:</p>
                        {/* <input type="email" value={email} onChange={handleChangeEmail}/> */}
                        <input className='mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        
                    </label>

                    <label>
                        <p>Pasword:</p>
                        <input className='pass' type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                    </label>

                    {/* <input type="submit" value="Submit" /> */}
                    <button className='sumit' type="submit">sumit</button>
                </Form>
               
               {/* {auth ? <p>Log in</p> : <p>Log out</p>} */}

               
                <p>hols {props.auth === true ? 'in' : 'out'}</p>
                <p>Email: carlos@gmail.com</p>
                <p>Pass: ponko</p>
            </Div>
        </DivBase>
    )
}