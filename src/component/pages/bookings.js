import React, {useEffect} from "react";
import styled from "styled-components";

import {useDispatch, useSelector} from "react-redux";

import { 
    getBookings,
    bookingListDate
    } from "../slice/bookingSlice";
                                   
import { GuesteList } from "../lists/bookingList";
import { Paginador } from "../comun/paginador";

import { BtnNewEst } from "../comun/btnNewEst";
import { SelectorGreenMenu } from "../comun/selectorGreenMenu";

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

export const Bookings = () =>{

    const selectores = ['All Guest', 'Pending', 'Booked', 'Canceled', 'Refund'];
    const dispatch = useDispatch();
    const bookingList = useSelector(bookingListDate)

    useEffect(() =>{
        dispatch(getBookings());
    },[dispatch] )
    
    return (
        <DivBase>
            <Div>
                <ControlDiv>

                    <SelectorGreenMenu selectores={selectores}/>                                           

                    <ControlDiv>
                        <NewRoom>
                            1 November 2020 - 30 November 2020
                            <IoIosArrowDown/>
                        </NewRoom>

                        <BtnNewEst/>
                        
                    </ControlDiv>
                   
                </ControlDiv>

                <div>
                    <GuesteList guests={bookingList}/>                    
                </div>

                <Paginador paginas={8}/>

            </Div>            
        </DivBase>        
    )
}
