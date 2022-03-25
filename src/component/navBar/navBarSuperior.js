import React, {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//Icons
import {FiAlignJustify, FiBell} from "react-icons/fi";
import {IoIosLogOut} from "react-icons/io";
import {ImEnvelop} from "react-icons/im";
import { NavBarLateral } from "./navBarLateral";

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    background: aqua;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    gap: 2rem;
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

    const navigate = useNavigate();

    const [ menuLateral, setMenuLateral] = useState(false)
   
    const handleClick = () => {
        menuLateral ? setMenuLateral(false) : setMenuLateral(true)
    }

    const handleAut = () => {
        props.setAuth(false);
        navigate('/');
    }

    return(
        <>
            <Div>
            
                <Div>
                    <Div>
                        <img src="../../../static/logo.ong" alt="Logo"/>
                        <div>
                            <H1>Travl</H1>
                            <P>Hotel Admin Dashboard</P>
                        </div>
                    </Div>           
            
                    <Div>
                        <FiAlignJustify onClick={handleClick}/>
                            Log {props.auth === true ? 'in' : 'out'} 
                    </Div>
                </Div>

                <DivIcon>
                    <ImEnvelop />
                    <FiBell />
                    {/* <IoIosLogOut onClick={props.setAuth(false)}/> */}
                    {props.auth === true ? 
                        <IoIosLogOut onClick={handleAut}/> :
                        null
                    }
                </DivIcon>
                
            </Div>
            
            {menuLateral ? <NavBarLateral/> : null}
            
        </>
       
    )
}