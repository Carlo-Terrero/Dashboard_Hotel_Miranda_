import React from 'react';

import styled from 'styled-components';

import { IoIosArrowDown } from "react-icons/io";


const Newest = styled.button`
    display: flex;
    color: #013401;
    background: white;
    border: #013401 1px solid;
    border-radius: 10px;
    width: 100px;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    icon{
        margin-top: 0.3rem;
        color: grey;
        font-size: 1.5em;
    }
   
`;

const DivIcon = styled.div`
    margin-top: 0.3rem;
    color: grey;
    font-size: 1.5em;
`;

export const BtnNewEst = () => {

    return(
        <Newest>
            Newest <DivIcon><IoIosArrowDown/></DivIcon>
        </Newest>
    )
}