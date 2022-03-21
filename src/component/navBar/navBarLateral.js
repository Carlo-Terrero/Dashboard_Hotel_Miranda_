import React from 'react';
import { Btn_Nav } from '../comun/btn-nav';

import styled from "styled-components";

const Content = styled.div`
    display: grid;
    
    background: aqua;
    width: 300px;
`

export const NavBarLateral = () => {

    return(
        <Content>
            <Btn_Nav name={"Dashboard"} />
            <Btn_Nav name={"Bookings"} />
            <Btn_Nav name={"Rooms"} />
            <Btn_Nav name={"Contact"} />
            <Btn_Nav name={"User"} />



            Travl Hotel Admin Dashboard


        </Content>
    )
}