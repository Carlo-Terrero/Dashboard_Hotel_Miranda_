import React from "react";
import styled from "styled-components";

import { RoomList } from "../lists/roomList";
import { roomsData } from "../data/rooms";
import { Paginador } from "../comun/paginador";

import { IoIosArrowDown } from "react-icons/io";

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

export const Rooms = () =>{
    
    return (
        <DivBase>
            <Div>
                <ControlDiv>
                    <MiniDiv>
                        <P>All Rooms</P>
                        
                        <P>Active Employee</P>
                        
                        <P>Inactive Employee</P>
                    </MiniDiv>                         

                    <ControlDiv>
                        <NewRoom>
                            + New Room
                        </NewRoom>

                        <Newest>
                            Newest <DivIcon><IoIosArrowDown/></DivIcon>
                        </Newest>
                    </ControlDiv>
                   
                </ControlDiv>

                <div>
                    <RoomList rooms={roomsData}/>                    
                </div>

                <Paginador paginas={8}/>

            </Div>
            
        </DivBase>
        
    )
}