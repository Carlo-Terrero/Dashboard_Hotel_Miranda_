import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import {LogingContext} from '../App'

const Div = styled.div`
    display: grid;
    background: white;
    height: 17rem;
    align-content: center;
    justify-content: center;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0px 18px 27px 2px rgb(0 0 0 / 35%);
`;

const ImgDiv = styled.div`
    
    background: grey;
    height: 7rem;
    border-radius: 15px;
`;

const P = styled.p`
    margin: 0.5rem;
`;

const H4 = styled.h4`
    margin: 0.8rem;
`;

const Button = styled.button`
    border-radius: 5px;
    padding: 0.5rem;
    border: none;
    color: green;
    background: #74e77469;
`;

export const BoxUser = () => {

    const dataUser = useContext(LogingContext);
    

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/user');
    }

    return(
        <Div>
            <div>
                <ImgDiv>
                    img aqui
                </ImgDiv>
                <H4>{dataUser.name}</H4>
                <P>{dataUser.email}</P>
                <Button onClick={handleClick}><b>contact Us</b></Button>
            </div>
        </Div>
    )
}