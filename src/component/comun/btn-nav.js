import React from 'react';
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Name = styled.a`
    decoration: none;
    color: blue;
    text-decoration-line: none;
    text-decoration: none;    
`;


/* const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red !important;
  
`; */

export const BtnNav = (props) => {

    const nameLink =  props.name.toLowerCase()

    return(
        <NavLink to={nameLink} ><Name>{props.name}</Name></NavLink>        
    )
}