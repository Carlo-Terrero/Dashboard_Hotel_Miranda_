import React from "react";

import { EjemReducer } from "../ejemplo/ejemReducer";
import { User } from "./users";

import styled from "styled-components";

const Div =  styled.div` 
    margin-left: 300px;
`;


export const Bookings = () =>{
     

   

    return (

        <Div>
            <p>Soy Bookings</p>
            <br/>
            <EjemReducer/>
            <br/>
            <br/>
            <User/>
        </Div>
    )
}

