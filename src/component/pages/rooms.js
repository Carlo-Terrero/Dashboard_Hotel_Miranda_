import React,{useEffect, useState} from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    roomsListDate,
    getRooms
} from '../slice/roomSlices';

import { RoomList } from "../lists/roomList";
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
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const roomsList = useSelector(roomsListDate);

    const [filterList, setFilterList] = useState(roomsList);

    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;
    const lastIndex = currentPage * limit;
    const firsIndex = lastIndex - limit;

    useEffect(() => {
        dispatch(getRooms());
    }, [dispatch])

    const handleClickNewRoom = () => {
       navigate(`newroom`);
    }

    function dataFilter(filteredOut){
        
        if(filteredOut === selectores[0]){
            setFilterList(roomsList);
            return;
        }

        const state = filteredOut == selectores[1] ? true : false;
        const elementSelected = roomsList.filter( element => element.status === state);
        setFilterList(elementSelected);
    }

    return (
        <Div>
            <ControlDiv>

                <SelectorGreenMenu 
                    selectores={selectores} 
                    returnData={dataFilter}/>                                 

                <ControlDiv>
                    <NewRoom onClick={handleClickNewRoom}>
                        + New Room
                    </NewRoom>

                    {/* <BtnNewEst/> */}
                    
                </ControlDiv>
                
            </ControlDiv>
            
            <RoomList rooms={filterList} lastIndex={lastIndex} firsIndex={firsIndex}/>                               
            
            <Paginador limit={limit} elementList={filterList.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />

        </Div>   
    )
}