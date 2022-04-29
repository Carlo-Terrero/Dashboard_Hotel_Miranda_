import React from 'react';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    getOneUsers,
    //conciergesListDate
} from '../slice/userSlice'
export const UserDetail = () => {

    const {id} = useParams()
    //const concierge = useSelector((state) => getOneUsers(state, id))
    

    //const c = useSelector(conciergesListDate())

    //console.log(concierge)
    //console.log(c)

    return(
        <div>
            <p>Soy los detalles de conscierge {id}</p>
        </div>
    )
}