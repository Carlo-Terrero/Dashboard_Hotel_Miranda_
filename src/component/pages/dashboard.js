import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import { Kpis } from "../dashboard/kpis";
import { D3BarGraph } from "../grafico/D3BarGraph";
import styled from "styled-components";
import { RiCalendarCheckLine } from "react-icons/ri";
import { MessageCart } from "../comun/messageCart";

const DivBase = styled.div`
    display: grid;
    margin: 3rem 15%;
`;

const Kdiv = styled.div`
    display: flex;
    background: white;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    border: #80808033 1px solid;
`;

const IconDiv = styled.div`    
    font-size: 1.5rem;
    padding:  0.6rem 0.8rem;
    border-radius: 7px;
    background: #ff000026;
    color: red;
`;

const Container = styled.div`
    display: flex;
    gap: 2rem;
`;

const BigContainer = styled(Container)`
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

export const Dashboard = () =>{

    
    return (

        <DivBase>
            <div>
                <Container>
                    <Kdiv>
                        <IconDiv>
                            <RiCalendarCheckLine />
                        </IconDiv>

                        
                        <Kpis num={"8,461"} name={'Total Booking'}/>
                    </Kdiv>

                    <Kdiv>
                        <IconDiv>
                            <RiCalendarCheckLine />
                        </IconDiv>
                        
                        <Kpis num={"963"} name={'New Booking'}/>
                    </Kdiv>

                    <Kdiv>
                        <IconDiv>
                            <RiCalendarCheckLine />
                        </IconDiv>
                        
                        <Kpis num={"753"} name={'Check In'}/>
                    </Kdiv>

                    <Kdiv>
                        <IconDiv>
                            <RiCalendarCheckLine />
                        </IconDiv>
                        
                        <Kpis num={"516"} name={'Check Out'}/>
                    </Kdiv>

                    
                </Container>

            </div>

            <BigContainer>
                <Calendar />

                <div>
                    <D3BarGraph />
                </div>
            </BigContainer>

            <MessageCart />
            
        </DivBase>
    )
}