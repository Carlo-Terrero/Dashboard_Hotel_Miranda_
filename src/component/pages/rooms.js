import React,{useEffect, useState} from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const Div =  styled.div` 
    display: grid;
    margin: 3rem 15%;
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
    cursor: pointer;
`;

export const Rooms = () =>{

    const selectores = ['All Rooms', 'Active Employee', 'Inactive Employee']
    
    const dispatch = useDispatch();
    
    const roomsList = useSelector(roomsListDate);
    const navigate = useNavigate();

    const limit = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * limit;
    const firsIndex = lastIndex - limit;


    const handleClickNewRoom = () => {
       navigate(`newroom`);
    }

    useEffect(() => {
        dispatch(getRooms());
    }, [dispatch])

    return (
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
            
            <RoomList rooms={roomsList} lastIndex={lastIndex} firsIndex={firsIndex}/>                               
            
            <Paginador limit={limit} elementList={roomsList.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />

        </Div>   
    )
}