import React from "react";

import { Kpis } from "../dashboard/kpis";
import { GraficoDashboar , Svg, CircleP, Circles, CirclesReact, AxisUno, AxisDos, AxisTres } from "../grafico/graficoDashboar";
import UseD3 from "../grafico/hookGrafico";
/* import {D3BarGraph} from "../grafico/.js;" */

import { D3BarGraph } from "../grafico/D3BarGraph";

import styled from "styled-components";

import { RiCalendarCheckLine } from "react-icons/ri";

const DivBase = styled.div`
    padding: 2rem;
`;

const Div =  styled.div` 
    margin-left: 300px;
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

export const Dashboard = () =>{
    
    

    return (
        <>
        <DivBase>
            <Div>
               
                <Container>
                    <Kdiv>
                        <IconDiv>
                            <RiCalendarCheckLine />
                        </IconDiv>

                        
                        <Kpis num={"8,461"} name={'New Booking'}/>
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

            </Div>

            <Div>
               {/*  <GraficoDashboar /> */}
               {/* <Svg />
               <CircleP />
               <Circles />
               <CirclesReact />
               <AxisUno />
               <AxisDos />
               <AxisTres />  */}
               {/* <D3BarGraph /> */}
               {/* Mejor ejemplo */}
               <D3BarGraph />
            </Div>

            {/* <UseD3 /> */}

        </DivBase>




        </>
    )
}