import React from "react";
import styled from "styled-components";

import { ConciergeList } from "../lists/conciergeList";
import { conciersgeData } from "../data/concierge"
import { Paginador } from "../comun/paginador";
import { BtnNewEst } from "../comun/btnNewEst";
import { SelectorGreenMenu } from "../comun/selectorGreenMenu";


const DivBase = styled.div`
    padding: 2rem;
`;

const Div =  styled.div` 
    display: grid;
    margin-left: 300px;
`;

const ControlDiv = styled.div`
    justify-content: space-between;
    display: flex;
    gap: 2rem;
    margin-bottom: 0.3rem;
`;

const NewRoom = styled.button`
    color: white;
    background: #013401;
    border: none;
    border-radius: 10px;
    width: 170px;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
`;


export const Concierge = () =>{
    
    const selectores = ['All Employee', 'Active Employee', 'Inactive Employee']
    
    return (
        <DivBase>
            <Div>
                <ControlDiv>

                    <SelectorGreenMenu selectores={selectores}/>                               

                    <ControlDiv>
                        <NewRoom>
                            + New Employee
                        </NewRoom>

                        <BtnNewEst/>
                        
                    </ControlDiv>
                   
                </ControlDiv>

                <div>
                    <ConciergeList concierges={conciersgeData}/>                    
                </div>

                <Paginador paginas={8}/>

            </Div>
            
        </DivBase>
        
    )
}

