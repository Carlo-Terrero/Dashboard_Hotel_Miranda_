import React, {useState, useContext} from "react";
import { LogingContext } from "../App";
import { useNavigate } from "react-router-dom";

import logo from "../../static/LogoHotel.svg";
import logo2 from "../../static/LogoHotel.svg";

import styled from "styled-components";

//Icons
import {FiAlignJustify, FiBell} from "react-icons/fi";
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

const contLogo = styled.div`
    font-size: 1.2rem;
`;

const DivIcon = styled(Div)`
    gap: 2rem;
    font-size: 1.2rem;
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
    const [ menuLateral, setMenuLateral] = useState(false)
   
    const handleClick = () => {
        menuLateral ? setMenuLateral(false) : setMenuLateral(true)
    }

    const handleAut = () => {
        props.dispatch({ type: 'NAME', value: 'no logg'});
        props.dispatch({ type: 'EMAIL', value: 'no logg mail'});
        props.dispatch({ type: 'AUTH', value: false});
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
            
                    <Div>
                        Log {dataLoggingContext.auth ? 'in' : 'out'} 
                    </Div>

                    <button onClick={handleClick}>O</button>
                </Div>

                {dataLoggingContext.auth ? 
                    <DivIcon>
                        <ImEnvelop />
                        <FiBell />
                        {/* <IoIosLogOut onClick={props.setAuth(false)}/> */}
                        
                            <IoIosLogOut onClick={handleAut}/> 
                    </DivIcon>
                    :
                    null
                }
                
            </Div>
            
            {/* Cuando maquetemos el resto eliminamos el navBarLatelar de abajo */}
            {dataLoggingContext.auth ? <NavBarLateral/> : null }
            {menuLateral? <NavBarLateral/> : null}
        </>
       
    )
}