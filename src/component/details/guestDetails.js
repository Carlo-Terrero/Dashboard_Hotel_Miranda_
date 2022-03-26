import React from 'react';
import {useParams} from 'react-router-dom';

export const GuestDetails = () => {

    const {id} = useParams();

    return (
        <div>
            <p>Soy guest {id}</p>
        </div>
    )
}