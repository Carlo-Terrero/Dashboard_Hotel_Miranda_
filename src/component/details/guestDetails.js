import React from 'react';
import {useParams} from 'react-router-dom';

export const BookingsDetails = () => {

    const {id} = useParams();

    return (
        <div>
            <p>Soy BookingsDetails {id}</p>
        </div>
    )
}