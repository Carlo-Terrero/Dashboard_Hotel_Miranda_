import React, {useState} from "react";
import styled from "styled-components";

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

    const [ menuLateral, setMenuLateral] = useState(true)
   
    const handleClick = () => {
        menuLateral ? setMenuLateral(false) : setMenuLateral(true)
    }

    const handleClickAut = () => {
        props.setAuth(false)
        console.log('auth')
    }

    return(
        <>
            <Div>
            
                <Div>
                    <Div>
                        <img src="../../../static/logo.ong"/>
                        <div>
                            <H1>Travl</H1>
                            <P>Hotel Admin Dashboard</P>
                        </div>
                    </Div>           
            
                    <Div>
                        <FiAlignJustify onClick={handleClick}/>
                            Dashboard {props.auth == true ? 'in' : 'out'} 
                    </Div>
                </Div>

                <DivIcon>
                    <ImEnvelop />
                    <FiBell />
                    <IoIosLogOut onClick={handleClickAut}/>
                </DivIcon>
                
            </Div>
            
            {menuLateral ? <NavBarLateral/> : null}
            
        </>
       
    )
}