import React from 'react';
import { useParams } from 'react-router-dom';

export const RoomDetails = () => {

    const { id } = useParams();
    const { rooms } = useParams();

    return(
        <div>
            <p>Soy las room numero {rooms} {id} </p>
        </div>
    )
}