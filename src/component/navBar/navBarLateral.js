import React from 'react';

import { BoxUser } from '../comun/boxUser';
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

//Icons
import { RiKey2Line, RiCalendarCheckLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md"


const Content = styled.div`
    display: grid;
    float: left;
    background: white;
    width: 150px;
    justify-content: center;
    gap: 2em;
    padding-top: 2em;
    border-bottom-right-radius: 35px;

    :hover{
        width: 300px;

    }
`;

const IconDiv =  styled.div`
    font-size: 1.5rem;
`;

const Rotador = styled(IconDiv)`
    transform: rotate(130deg);
`;

const Div = styled.div`
    color: #318431ab;
    display: flex;
    gap: 1rem;
    margin-left: 2rem;
    cursor: pointer;

    .menu_text{
        margin: 0;
        font-size: 1.3rem;
        display: none;
    }

    :hover{
        color: red;
        
        p{
            display: block;
            visibility: visible;
            cursor: hand;
        }

    }
`;

const Div2 = styled(Div)`
    display: grid;
    gap: 0;
    padding: 1rem 0;
`;

const P = styled.p`
    padding-bottom: 1rem;
`;

const P2 = styled.p`
    margin: 0;
    color: black;
`;

export const NavBarLateral = () => {

    const navigate = useNavigate();


    return(
        <Content>
            <Div onClick={() => navigate('/dashboard')}>   
                <IconDiv>
                    <MdOutlineDashboard/>
                </IconDiv>

                <p className='menu_text'>Dashboard</p>
            </Div>

            <Div onClick={() => navigate('/rooms')}>
                <Rotador>
                    <RiKey2Line/>
                </Rotador>
                
                <p className='menu_text'>Rooms</p>

            </Div>

            <Div onClick={() => navigate('/bookings')}>
                <IconDiv>
                    <RiCalendarCheckLine/>
                </IconDiv>

                <p className='menu_text'>Bookings</p>

            </Div>
            
            <Div onClick={() => navigate('/users')}>
                <IconDiv>
                    <FaRegUser/>
                </IconDiv>
                
                <p className='menu_text'>Users</p>

            </Div>


            <BoxUser/>

            <Div2>
                <P2><b>Travl Hotel Admin Dashboard</b></P2>
                 &#169; 2020 All Rights Reserved 
            </Div2>

            <Div>
                <P>Mode with  by Peterdrow</P>
            </Div>

        </Content>
    )
}