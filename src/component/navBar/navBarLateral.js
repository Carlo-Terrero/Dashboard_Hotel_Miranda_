import React, {useState} from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import { BoxUser } from '../comun/boxUser';
//Icons
import { RiKey2Line, RiCalendarCheckLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md"


const Content = styled.div`
    display: grid;
    float: left;
    background: white;
    width: 35px;
    justify-content: center;
    gap: 2em;
    padding-top: 2em;
    border-bottom-right-radius: 35px;
    z-index: 5;
    position: absolute;
    padding: 1rem 1rem;

    :hover{
        width: 180px;

        .container_nav{
            p{
                display: block;
                visibility: visible;
                cursor: pointer;
            }
        }
    }
`;

const IconDiv =  styled.div`
    font-size: 1.5rem;
`;

const Rotador = styled(IconDiv)`
    transform: rotate(130deg);
`;

const Div = styled.div`
    color: ${props => props.isActive ? 'blue' : '#318431ab;'};
    display: flex;
    gap: 1rem;
    cursor: pointer;

    p{
        margin: 0;
        font-size: 1.3rem;
        display: none;
    }

    :hover{
        color: blue;
    }
`;

const Div2 = styled.div`
    display: none;
    gap: 0;
    padding: 1rem 0;
`;

const P = styled.p`
    padding-bottom: 1rem;
    margin-top: -3rem;
`;

const P2 = styled.p`
    margin: 0;
    color: black;

`;

export const NavBarLateral = () => {

    const [isActive, setIsActive] = useState(0);
    const navigate = useNavigate();

    function redirection(rout, position){
        navigate(rout);
        setIsActive(position);
    }

    return(
        <Content>
            <Div className='container_nav' isActive={isActive === 0} onClick={() => redirection('/dashboard', 0)}>   
                <IconDiv>
                    <MdOutlineDashboard/>
                </IconDiv>

                <p className='menu_text'>Dashboard</p>
            </Div>

            <Div className='container_nav' isActive={isActive === 1} onClick={() => redirection('/rooms', 1)}>
                <Rotador>
                    <RiKey2Line/>
                </Rotador>
                
                <p className='menu_text'>Rooms</p>

            </Div>

            <Div className='container_nav' isActive={isActive === 2} onClick={() => redirection('/bookings', 2)}>
                <IconDiv>
                    <RiCalendarCheckLine/>
                </IconDiv>

                <p className='menu_text'>Bookings</p>

            </Div>
            
            <Div className='container_nav' isActive={isActive === 3} onClick={() => redirection('/users', 3)}>
                <IconDiv>
                    <FaRegUser/>
                </IconDiv>
                
                <p className='menu_text'>Users</p>

            </Div>

            {/* <BoxUser/> */}

            {/* <Div2>
                <P><b>Travl Hotel Admin Dashboard</b></P>
                 &#169; 2020 All Rights Reserved 
            </Div2>

            <Div2>
                <P>Mode with  by Peterdrow</P>
            </Div2> */}

        </Content>
    )
}