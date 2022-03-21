import React from "react";
import styled from "styled-components";
import {FiAlignJustify, FiBell} from "react-icons/fi";
import {IoIosLogOut} from "react-icons/io";
import {ImEnvelop} from "react-icons/im"


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

export const NavBarSuperior = () => {

    const handleClick = () => {
        console.log("burguer click")
    }
    return(
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
                        Dashboard
                </Div>
            </Div>

            <DivIcon>
                <ImEnvelop />
                <FiBell />
                <IoIosLogOut />
            </DivIcon>
           
            
            
        </Div>
    )
}