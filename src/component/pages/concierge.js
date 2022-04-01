import React from "react";
import styled from "styled-components";

import { ConciergeList } from "../lists/conciergeList";
import { conciersgeData } from "../data/concierge"
import { Paginador } from "../comun/paginador";
import { Btn_NewEst } from "../comun/btn-newest";

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

const MiniDiv = styled(ControlDiv)`
    justify-content: space-between; 
    gap: 0;   
`;

const P = styled.p`
    border-bottom: #80808075 1px solid;
    color: #464444;
    padding-bottom: 1rem;
    width: 10rem;
    text-align: center;
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

    
    return (
        <DivBase>
            <Div>
                <ControlDiv>
                    <MiniDiv>
                        <P>All Employee</P>
                        
                        <P>Active Employee</P>
                        
                        <P>Inactive Employee</P>
                    </MiniDiv>                         

                    <ControlDiv>
                        <NewRoom>
                            + New Employee
                        </NewRoom>

                        <Btn_NewEst/>
                        {/* <Newest>
                            Newest <DivIcon><IoIosArrowDown/></DivIcon>
                        </Newest> */}
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

