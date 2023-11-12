import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneRoom, roomsListDate, editOneRoom, postNewRoom } from '../slice/roomSlices';
import { useNavigate } from "react-router-dom";

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
            gap: 1.5rem;
            margin: 0;

            p{
                margin: 0;
            }
           
        }
    }
`;

const DivButton = styled.div`
    justify-content: end;
    margin-top: -2rem;
`;

const Button = styled.button`
    width: 5rem;
    height: 1.5rem;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    background: green;
    color: white;
`;

const DisabledButton = styled(Button)`
    background: #718771;
    color: -internal-light-dark(rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3));
`;

const ElementInput =  styled.input`
    border: none;
    width: 3rem;
    margin-bottom: 0.5rem;
    width: 5rem;
    border-radius: 0.5rem;
    border: 0.5px solid #80808070;
    text-align: center;
`;

const DivTextArea = styled.textarea`
    border: 0.5px solid #80808070;
    border-radius: 0.5rem;
    text-align: center;
    font-family: sans-serif;
`;

const ElementInputImg = styled(ElementInput)`
    width: 20rem;
`;

export const RoomDetails = () => {

    const dispatch = useDispatch()
    const { id } = useParams();
    const room = useSelector(roomsListDate);
    const roomSelected =  room.find(room => room._id === id);
    const isExis = id ? true : false;

    const [foto, setFoto] = useState(isExis ? roomSelected.foto : 'http://www.mdvacationclub.com/wp-content/uploads/2018/12/Placeholder.png');
    const [bed_Type, setBed_Type] = useState(isExis ? roomSelected.bed_type : '');
    const [number, setNumber] = useState(isExis ? roomSelected.number : '');
    const [description, setDescription] = useState(isExis ? roomSelected.description : '');
    const [offer, setOffer] = useState(isExis ? roomSelected.offer : false);
    const [price, setPrice] = useState(isExis ? roomSelected.price : '');
    const [discount, setDiscount] = useState(isExis ? roomSelected.discount : 0);
    const [cancellation, setCancellation] = useState(isExis ? roomSelected.cancellation : '');
    const [facilities, setFacilities] = useState(isExis ? roomSelected.facilities : 'Tv');
    const [status, setStatus] = useState(isExis ? roomSelected.status : true);
    const [room_floor, setRoom_floor] = useState(isExis ? roomSelected.room_floor : '');

    const navigate = useNavigate();

    useEffect(() =>{
        dispatch(getOneRoom(id))
    },[])

    const hancleClickEdit = () => {

        const roomObj = {
            bed_type: bed_Type,
            cancellation: cancellation,
            description: description,
            discount: discount ,
            facilities: facilities,
            foto: foto,
            number: number,
            offer: offer ,
            price: price ,
            room_floor: room_floor,
            status: status,
        }
        
        isExis ? dispatch(editOneRoom({id: id, roomObj: roomObj})) : dispatch(postNewRoom(roomObj));
        navigate('/rooms');
    }

    return(
        
        <DivContainer>    
            <div>
                <img src={foto}/>
                Url img: <ElementInputImg value={foto} onChange={(e) => setFoto(e.target.value)}/>
            </div>

            <div>
                <div>
                    
                    <div>
                        <p>Piso: </p>
                        <ElementInput value={room_floor} onChange={(e) => setRoom_floor(e.target.value)}/>
                    </div>

                    <div>
                        <p>Número: </p>
                        <ElementInput value={number} onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                </div>

                <div>
                    <p>Cama:</p>
                    <ElementInput value={bed_Type} onChange={(e) => setBed_Type(e.target.value)}/>
                </div>

                <p>facilities: {facilities} </p>


                <p>Descripcion: </p>
                <DivTextArea value={description} rows="4" cols="40" onChange={(e) => setDescription(e.target.value)}/>

                <div>
                    <p>Precio: </p>
                    <ElementInput value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>

                <div>
                    <p>discount:</p>
                    <ElementInput value={discount} onChange={(e) => setDiscount(e.target.value)}/>%
                </div>
                
                <p>Oferta: {offer ? 'En oferta' : 'Sin oferta'} </p>                    
                <p>Condiciones de cancelacion: </p>
                <DivTextArea value={cancellation} rows="4" cols="40" onChange={(e) => setCancellation(e.target.value)}/>
                <p>Estado: {status ? 'Lista' : 'En mantenimiento'} </p>

                <DivButton>
                    <Button onClick={hancleClickEdit}>{isExis ? 'Editar' : 'Crear'}</Button>
                    {/* {status ? <Button>Reservar</Button> : <DisabledButton disabled>Reservar</DisabledButton>} */}
                    
                </DivButton>
            </div>
            
        </DivContainer>
    )
}
