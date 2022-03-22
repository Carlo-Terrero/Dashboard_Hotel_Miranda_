import React from 'react';

import { Btn_Nav } from '../comun/btn-nav';
import { BoxUser } from '../comun/boxUser';

import styled from "styled-components";

//Icons
import { RiKey2Line,RiCalendarCheckLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md"


const Content = styled.div`
    display: grid;
    float: left;
    background: white;
    width: 300px;
    justify-content: center;
    gap: 2em;
    padding-top: 2em;
`;

const IconDiv =  styled.div`
    font-size: 1.3rem;

`;

const Rotador = styled(IconDiv)`
    transform: rotate(130deg);
`;

const Div = styled.div`
    color: #318431ab;
    display: flex;
    gap: 1rem;
`;

const Div2 = styled(Div)`
    display: grid;
    gap: 0;
    padding: 1rem 0;
`;

const P = styled.p`
    padding-bottom: 2rem;
`;

const P2 = styled.p`
    margin: 0;
    color: black;
`;

export const NavBarLateral = () => {

    return(
        <Content>
            <Div>   
                <IconDiv>
                    <MdOutlineDashboard/>
                </IconDiv>

                <Btn_Nav name={"Dashboard"} />
            </Div>

            <Div>
                <Rotador>
                    <RiKey2Line/>
                </Rotador>
                
                <Btn_Nav name={"Rooms"} />
            </Div>

            <Div>
                <IconDiv>
                    <RiCalendarCheckLine/>
                </IconDiv>

                <Btn_Nav name={"Bookings"} />
            </Div>

            <Div>
                <IconDiv>
                    <FaRegUser/>
                </IconDiv>                    
                
                <Btn_Nav name={"Guest"} />                
            </Div>
            
            <Div>
                <IconDiv>
                    <RiKey2Line/>
                </IconDiv>

                <Btn_Nav name={"Concierge"} />
            </Div>


            <BoxUser/>

            <Div2>
                <P2><b>Travl Hotel Admin Dashboard</b></P2>
                 &#169; 2020 All Rights Reserved 
            </Div2>

            <Div>
                <P>Mode with  by Peterdrow</P>
            </Div>

        </Content>
    )
}