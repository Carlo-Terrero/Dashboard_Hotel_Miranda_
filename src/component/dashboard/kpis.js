import React from "react";

import styled from "styled-components";

const Div = styled.div`
    display: grid;
`;

const P = styled.p`
    margin: 0;
    font-size: 1.7rem;
`;

const Peque = styled(P)`
    font-size: 0.7rem;
    color: grey;
`;

export const Kpis = (props) => {

    
    return(
        <Div>
           <P>{props.num}</P>
           <Peque>{props.name}</Peque>
        </Div>
    )
}