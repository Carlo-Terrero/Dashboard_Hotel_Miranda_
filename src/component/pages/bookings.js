import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {
    addBooking,
    deleteBooking,
    editBooking,
    getOneBooking,
} from '../slice/bookingSlice';

import styled from "styled-components";

const Div =  styled.div` 
    margin-left: 300px;
`;


export const Bookings = () =>{
     
    const dispatch = useDispatch();

    const handleDate = () => {
        console.log('booking');
        dispatch(addBooking());
        dispatch(deleteBooking());
        dispatch(editBooking());
        dispatch(getOneBooking());
    }
   

    return (

        <Div>
            <p>Soy Bookings</p>
            
            <button onClick={handleDate}>Datos por consola</button>
            
        </Div>
    )
}

