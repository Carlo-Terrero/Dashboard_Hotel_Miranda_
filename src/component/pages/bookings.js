import React from "react";

import styled from "styled-components";

export const Bookings = () =>{
    
    const DivBase = styled.div`
        background: #8080800d;
    `;

    const Div =  styled(DivBase)` 
        margin-left: 300px;
    `;
    return (
        <Div>
            Soy Bookings
        </Div>
    )
}