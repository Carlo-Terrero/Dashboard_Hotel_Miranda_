import React,{useEffect} from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import {
    roomsListDate,
    getRooms,
    postNewRoom
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
    margin-left: 30px;
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

    const handleClickNewRoom = () => {
        const newRoon = {
            foto: 'http://www.mdvacationclub.com/wp-content/uploads/2018/12/Placeholder.png', 
            bed_type: 'Suite',
            number: 2121,
            description: 'Room para probar end poin de crear room',
            offer: true,
            price: 73,
            discount: 21,
            cancellation: 'Prueba si ganas de cancelacion',
            facilities: 'Mosquiteras, Tv, Wifi',
            status: true,
            room_floor: 3
        }
        console.log(newRoon)
        dispatch(postNewRoom(newRoon))
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
                
                <RoomList rooms={roomsList}/>                               
                
                <Paginador paginas={8}/>

            </Div>
            
        </DivBase>
        
    )
}