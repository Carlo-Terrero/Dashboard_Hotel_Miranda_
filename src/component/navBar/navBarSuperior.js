import React, {useState, useContext} from "react";
import { LogingContext } from "../App";
import { useNavigate } from "react-router-dom";

import logo from "../../static/LogoHotel.svg";

import styled from "styled-components";

//Icons
import {FiBell} from "react-icons/fi";
import {IoIosLogOut} from "react-icons/io";
import {ImEnvelop} from "react-icons/im";
import { NavBarLateral } from "./navBarLateral";

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    gap: 2rem;
    font-size: 1.2rem;
`;

const DivIcon = styled(Div)`
    gap: 2rem;
    font-size: 1.2rem;

    div{
        cursor: pointer;
    }
`;

const H1 = styled.h1`
    margin: 0;
    font-size: 1.5rem;
`;

const P = styled.p`
    margin: 0;
    font-size: 0.8rem;
`;

export const NavBarSuperior = (props) => {

    const dataLoggingContext = useContext(LogingContext);
    const navigate = useNavigate();

    const handleAut = () => {
        localStorage.removeItem('Token');
        props.dispatch({ type: 'LOGIN', value: {auth: false, user: '', email: ''}});
        navigate('/');
    }

    return(
        <>
            <Div>
            
                <Div>
                    <Div>
                                            
                        <img className="imgIcono" src={logo} alt="Logo"/>                                                 

                        <div>
                            <H1 >Travl</H1>
                            <P>Hotel Admin Dashboard</P>
                        </div>
                    </Div>           
            
                </Div>

                <DivIcon>                    
                    
                    <IoIosLogOut onClick={handleAut}/> 
                    
                </DivIcon>
                
            </Div>
            
            <NavBarLateral/>
        </>
       
    )
}