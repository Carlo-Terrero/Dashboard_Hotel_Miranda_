import React from 'react';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    getOneConcierge,
    //conciergesListDate
} from '../slice/conciergeSlice'
export const ConsciergeDetail = () => {

    const {id} = useParams()
    const concierge = useSelector((state) => getOneConcierge(state, id))
    

    //const c = useSelector(conciergesListDate())

    console.log(concierge)
    //console.log(c)

    return(
        <div>
            <p>Soy los detalles de conscierge {id}</p>
        </div>
    )
}