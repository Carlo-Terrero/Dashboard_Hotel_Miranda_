import React from "react";
import styled from "styled-components";
                                   
import { GuesteList } from "../lists/guestList";
import { guestData } from "../data/guest";
import { Paginador } from "../comun/paginador";

import { IoIosArrowDown } from "react-icons/io";

const DivBase = styled.div`
    background: #8080800d;
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
    display: flex;
    background: #013401;
    border: none;
    border-radius: 10px;
    width: 300px;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

const Newest = styled(NewRoom)`
    display: flex;
    color: #013401;
    background: white;
    border: #013401 1px solid;
    gap: 0.5rem;
    width: 120px;
`;

const DivIcon = styled.div`
    color: grey;
    font-size: 1rem;
`;

export const Guest = () =>{

    
    return (
        <DivBase>
            <Div>
                <ControlDiv>
                    <MiniDiv>
                        <P>All Guest</P>                       
                        <P>Pending</P>
                        <P>Booked</P>                        
                        <P>Canceled</P>                        
                        <P>Refund</P>
                    </MiniDiv>                         

                    <ControlDiv>
                        <NewRoom>
                            1 November 2020 - 30 November 2020
                            <IoIosArrowDown/>
                        </NewRoom>

                        <Newest>
                            Newest <DivIcon><IoIosArrowDown/></DivIcon>
                        </Newest>
                    </ControlDiv>
                   
                </ControlDiv>

                <div>
                    <GuesteList guests={guestData}/>                    
                </div>

                <Paginador paginas={8}/>

            </Div>
            
        </DivBase>
        
    )
}
