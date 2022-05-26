import React,{useEffect} from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import {
    roomsListDate,
    addRoom,
    editRoom,
    getOneElemen,
    getRooms
} from '../slice/roomSlices';

import { RoomList } from "../lists/roomList";
//import { roomsData } from "../data/rooms";//Este sera el que se borre
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

export const Rooms = () =>{

    const selectores = ['All Rooms', 'Active Employee', 'Inactive Employee']
    
    const dispatch = useDispatch();
    //const roomsList = useSelector((state)=>state.rooms.roomList);
    const roomsList = useSelector(roomsListDate);
    console.log(roomsList)

    const handleClickNewRoom = () => {
        console.log('kk')
        dispatch(addRoom());
        dispatch(editRoom());
        dispatch(getOneElemen());

        // onCLick={ ()=> {dispatch(addRoom())} } ----Si lo quieres hacer en una sola linea
    }

    useEffect(() => {
        dispatch(getRooms());
    }, [dispatch])

    return (
        <DivBase>
            <Div>
                <ControlDiv>

                    <SelectorGreenMenu selectores={selectores}/>                                 

                    <ControlDiv>
                        <NewRoom onClick={handleClickNewRoom}>
                            + New Room
                        </NewRoom>

                        <BtnNewEst/>
                        
                    </ControlDiv>
                   
                </ControlDiv>

                <div>
                    {<RoomList rooms={roomsList}/> }                
                </div>
                
                <Paginador paginas={8}/>

            </Div>
            
        </DivBase>
        
    )
}