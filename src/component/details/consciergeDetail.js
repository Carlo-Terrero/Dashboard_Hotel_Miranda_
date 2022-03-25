import React from 'react';
import { useParams } from 'react-router-dom';

export const ConsciergeDetail = () => {

    const {id} = useParams()

    return(
        <div>
            <p>Soy los detalles de conscierge {id}</p>
        </div>
    )
}