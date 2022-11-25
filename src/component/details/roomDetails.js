import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneRoom, roomsListDate } from '../slice/roomSlices';

import styled from "styled-components";

const DivContainer = styled.div`
    padding-top: 2rem;
    display: flex;
    background: white;  
    width: 50rem;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 3rem 25%;
    border: 0.5px solid #80808038;

    div{
        margin: 1rem;

        img{
            width: 25rem;
        }

        div{
            display: flex;
            gap: 2rem;
            margin: 0;

            p{
                margin: 0;
            }
        }
    }
`;

export const RoomDetails = () => {

    const dispatch = useDispatch()
    const { id } = useParams();
    const room = useSelector(roomsListDate);
    let room2 = '';
    
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

    useEffect(() =>{
        dispatch(getOneRoom(id))
    },[])

    console.log(room)
    return(
        <DivContainer>    
            <div>
                <img src={foto}/>
            </div>

            <div>
                <div>
                    <p>Piso: {room_floor} </p>
                    <p>Número: {number} </p>
                </div>

                <p>Cama: {bed_type} </p>
                <p>facilities: {facilities} </p>
                <p>Descripcion: </p>
                <p>{description} </p>

                <div>
                    <p>Precio: {price} </p>
                    <p>Discount: {discount}%</p>
                </div>
                
                <p>Oferta: {offer ? 'En oferta' : 'Sin oferta'} </p>                    
                <p>Condiciones de cancelacion: </p>
                <p>{cancellation}</p>
                <p>Estado: {status ? 'Lista' : 'En mantenimiento'} </p>

            </div>
            
        </DivContainer>
    )
}
