import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import { getOneBooking, bookingListDate } from '../slice/bookingSlice';
import { useSelector, useDispatch } from 'react-redux';

export const BookingsDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const booking = useSelector(bookingListDate)

    useEffect(() => {
        dispatch(getOneBooking(id))
    },[])


    let amenities,
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


    if(!booking.length == 0 ){
        console.log('aja')
        console.log(booking[0])
        amenities = booking[0].amenities;
        check_In = booking[0].check_In;
        check_Out = booking[0].check_Out;
        description_room = booking[0].description_room;
        fotos = booking[0].fotos;
        name = booking[0].name;
        order_date = booking[0].order_date;
        price = booking[0].price;
        room_number = booking[0].room_number;
        room_type = booking[0].room_type;
        special_request = booking[0].special_request;
        status = booking[0].status;
        _id = booking[0]._id
    }

    return (
        <div>            
            <p>Detalles</p>
            {amenities}
            {check_In}
            {check_Out}
            {description_room}
            {fotos}
            {name}
            {order_date}
            {price}
            {room_number}
            {room_type}
            {special_request}
            {status}
        </div>
    )
}