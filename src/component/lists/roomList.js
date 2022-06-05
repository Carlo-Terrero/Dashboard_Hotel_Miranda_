import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteOneRoom } from '../slice/roomSlices';

import styled from 'styled-components';
import { AiOutlineMore } from 'react-icons/ai';


const DivContainer = styled.div`
    display: grid; 
    background: white;   
    border-radius: 25px;
    border-bottom: #8080802e 0.1rem solid;
    padding-bottom: 0.9rem;
`;

const Container = styled.div`
    display: flex;    
    border: #8080802e 0.1rem solid;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 10rem;
    padding-bottom: 0rem;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    
`;

const ContainerRooms = styled(Container)`
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
/*  border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px; */
    border-top: none;
    padding-right: 3rem;
`;

const Div = styled.div`
    display: flex;
    gap: 3rem;
    align-items: end;
`;

const DivCabecera = styled(Div)`
    gap: 7rem;
    margin-right: 2rem;
`;

const DivMid = styled(Div)`
    width: 37rem;
    gap: 7rem;
    margin-left: -4rem;
`;

const DivMidDatos = styled(DivMid)`
    margin-left: 0;
`;

const DivCheck = styled(Div)`
    align-items: baseline;
    width: 300px;
`;

const DivCheckRooms = styled(DivCheck)`
    align-items: center;
    gap: 1.5rem;
`;

const DivPrecio = styled(Div)`
    gap: 0.5rem;
    width: 100px;
`;

const DivData = styled.div`
 
`;

const DivMenuPuntos = styled.div`
    font-size: 1.5rem;
    margin-top:1rem;
    margin-left: -4rem;
`;

const P = styled.p`
    color: black;
    font-weight: bold;
`;

const Pd = styled(P)`
    width: 5rem;
`;

const Id = styled(P)`
    color: green;
`;

const Pn = styled(Id)`
    color green;
    font-weight: 100;
`;

const Check = styled.input`
    color: red;
    font-size:2rem;
`;

const DivImg = styled.div`
    margin: 1rem 0;
    height: 4rem;    
    width: 8rem;
    border-radius: 15px;

    img{
        height: 4rem;    
        width: 8rem;
    }
`;

const BtnGreen = styled.button`
    width: 7rem;
    color: white;
    background: green;
    border: none;
    padding: 0.5rem;
    border-radius: 10px;
`;

const BtnRed = styled(BtnGreen)`
    background: red;
`;


export const RoomList = (props) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleIdRoom = (date) => {
        //Con navigate añadimos a la url el dato que queramos, en este caso el ide
        navigate(`${date}`)
    }

    const handleDeleteRoom = (id) => {
        //Disparador para eliminar habitacion
        dispatch(deleteOneRoom(id))
    }
    
    return(
        <DivContainer>
            <Container>
                <DivCheck>                    
                    
                    <P>Room Name</P>
                </DivCheck>

                <DivMid>
                    <P>Bed Type</P>
                    <P>Room Floor</P>
                    <P>Facilities</P>
                </DivMid>

                <DivCabecera>
                    <P>Rate</P>
                    <P>Status</P>
                </DivCabecera>
                
            </Container>        

            {props.rooms.map((room,i) => 
                <ContainerRooms key={i} >
                    <DivCheckRooms onClick={() => handleIdRoom(room._id)}>                                            

                        <DivImg img={room.foto}>
                            <img src={`${room.foto}`}/>
                        </DivImg>
                        
                        <DivData>
                            <Id>{room._id}</Id>
                            <P>{room.number}</P>
                        </DivData>
                        
                    </DivCheckRooms>

                    <DivMidDatos>
                        <Pd>{room.bed_type}</Pd>
                        <P>Flooo A-{room.room_floor}</P>
                        <P>{room.facilities}</P>                                                                       
                    </DivMidDatos>

                    <Div>
                        <DivPrecio>
                            <P>{room.price}€</P> 
                            <Pn>/night</Pn>
                        </DivPrecio>
                        
                        <P>{room.status === true ? <BtnGreen>Available</BtnGreen> : <BtnRed>Booked</BtnRed>}</P>
                       
                    </Div>

                    <DivMenuPuntos onClick={() => handleDeleteRoom(room._id)}>
                        {<AiOutlineMore/>}
                    </DivMenuPuntos>
                   
                    
                </ContainerRooms>

            )}
            
        </DivContainer>
    )
}