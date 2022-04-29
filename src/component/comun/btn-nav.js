import React from 'react';
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Name = styled.a`
    decoration: none;
    color: blue;
    text-decoration-line: none;
    text-decoration: none;    
`;



export const BtnNav = (props) => {

    const nameLink =  props.name.toLowerCase()

    return(
        <NavLink to={nameLink} ><Name>{props.name}</Name></NavLink>        
    )
}