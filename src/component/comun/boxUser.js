import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import {LogingContext} from '../App'

const Div = styled.div`
    display: flex;

    background: white;
    height: 15rem;
    align-content: center;
    justify-content: center;
    text-align: center;
    border-radius: 17px;
    box-shadow: 0px 18px 27px 2px rgb(0 0 0 / 35%);

    h4,button,p{
        display:none;
    }
   
    :hover{
        div{
            
            div{
                height: 7rem;
                width: 100%;
                border-radius: 15px;

                img{
                    height: 7rem;
                    width: 100%;
                    border-radius: 15px;
                }
            }

        }

    }
`;

const ImgDiv = styled.div`
    background: grey;
    height: 5rem;
    width: 5rem;
    border-radius: 50px;

    img{
        height: 5rem;    
        width: 5rem;
        border-radius: 50px;
    }
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
    cursor: pointer;
`;

export const BoxUser = () => {

    const dataUser = useContext(LogingContext);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/userEdit');
    }

    return(
        <Div className='box_user'>
            {/* <div> */}
                <ImgDiv imgUser={dataUser.foto}>
                    <img src={`${dataUser.foto}`}/>
                </ImgDiv>
                <H4>{dataUser.user}</H4>
                <P>{dataUser.email}</P>
                <Button onClick={handleClick}><b>contact Us</b></Button>
            {/* </div> */}
        </Div>
    )
}