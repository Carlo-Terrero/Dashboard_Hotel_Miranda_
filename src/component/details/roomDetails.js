import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneRoom,roomsListDate } from '../slice/roomSlices';

export const RoomDetails = () => {

    const dispatch = useDispatch()
    const { id } = useParams();
    const room = useSelector(roomsListDate);
    //console.log(room[0])
    
    const {foto, 
    bed_type,
    number,
    description,
    offer,
    price,
    discount,
    cancellation,
    facilities,
    status,
    room_floor} = room[0]
    //const { rooms } = useParams();

    useEffect(() =>{
        dispatch(getOneRoom(id))
    },[dispatch])
    
    return(
        <div>
            {/* <img src={foto} /> */}
            <p>Descripcion {description} </p>
            <p>Número {number} </p>
            <p>Precio {price} </p>
            <p>Discount {discount} </p>
            <p>Cancellation --- {cancellation} </p>
            <p>Cama {bed_type} </p>
            <p>Oferta {offer} </p>
            <p>facilities {facilities} </p>
            <p>Estado {status} </p>
            <p>Piso {room_floor} </p>
        </div>
    )
}