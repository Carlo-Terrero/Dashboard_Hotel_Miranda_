import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Moment from 'react-moment';

import styled from "styled-components";

import { getOneBooking, bookingListDate } from '../slice/bookingSlice';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

const DivContainer = styled.div`
    padding-top: 2rem;
    display: flex;
    background: white;  
    width: 60rem;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 3rem 25%;
    border: 0.5px solid #80808038;

    div{
        margin: 1rem;

        img{
            width: 30rem;
        }

        div{
            display: flex;
            gap: 3rem;
            margin: 1rem 0;
            
            p{
                margin: 0;
            }
        }
    }
`;

export const BookingsDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const booking = useSelector(bookingListDate)

    useEffect(() => {
        dispatch(getOneBooking(id))
    },[])

    const {
        amenities,
        check_In,
        check_Out,
        description_room,
        fotos,
        name,
        order_date,
        price,
        room_number,
        room_type,
        special_request,
        status,
        _id
    } = booking[0]

    return (
        <DivContainer>            
            <div>
                <img src={fotos} alt="imagen de la habitación" />
            </div>

            <div>
                <p>Huésped: {name}</p>
                <p>Nº Habitación: {room_number}</p>
                <p>Tipo de la habiración: {room_type}</p>

                <p>Peticion de cliente:</p>
                <p>{special_request}</p>

                <p>Amenities: {amenities}</p>
                
                <p>Descripcion de la habitación: </p>
                <p>{description_room}</p>

                <div>
                    <p>Check In: {moment(check_In).format( "DD-MM-YYYY")}</p>
                    <p>Check Out: {moment(check_Out).format( "DD-MM-YYYY")}</p>
                </div>
                
                <div>
                    <p>Reservado el: {moment(order_date).format("DD-MM-YYYY")}</p>
                    <p>Total: {moment(check_Out).diff(moment(check_In), 'days')} días.</p>
                </div>

                <div>
                    <p>Precio: {price} €</p>
                    <p>{status}</p>
                </div>

            </div>
        </DivContainer>
    )
}

