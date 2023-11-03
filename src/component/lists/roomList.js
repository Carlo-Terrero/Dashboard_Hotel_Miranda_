import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const P = styled.p`
    color: black;
    font-weight: bold;
`;

const Id = styled(P)`
    color: green;
`;

const Pn = styled(Id)`
    font-weight: 100;
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

const Table = styled.table`
    border: #8080802e 0.1rem solid;
    padding: 0.5rem 2rem;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background: white;
    border-spacing: 0;
`;

const Th = styled.th`
    height: 40px;
    border-bottom: 0.1px solid #8080802e;
`;

const Td = styled.td`
    height: 5.5rem;
    text-align: center;
    border-bottom: 0.1px solid #8080802e;
`;

const Td2 = styled(Td)`
    display: flex;
    text-align: center;
    align-items: center;
    height: 6rem;

    p{
        margin: 0;
        padding: 0;
    }
`;

const ThSyled = styled(Td)`    

    img{
        height: 5.5rem;
        width: 100%;
    }
`;

const TrElement = styled.tr`
    
    :hover{
        cursor: pointer;
    }
`;

export const RoomList = ({rooms, lastIndex ,firsIndex}) => {

    const navigate = useNavigate();

    const handleIdRoom = (date) => {
        navigate(`${date}`)
    }
    
    return(

        <Table>
            <tr>
                <Th></Th>
                <Th>Room Name</Th>
                <Th>Bed Type</Th>
                <Th>Room Floor</Th>
                <Th>Facilities</Th>
                <Th>Rate</Th>
                <Th>Status</Th>
            </tr>

            {rooms.map((room) => 
                <TrElement key={room._id} onClick={() => handleIdRoom(room._id)}>
                    <ThSyled><img src={`${room.foto}`}/></ThSyled>
                    <Td>room Nº {room.number}</Td>
                    <Td>{room.bed_type}</Td>
                    <Td>Flooo A-{room.room_floor}</Td>
                    <Td>{room.facilities}</Td>
                    <Td2>{room.price}<Pn>/night</Pn></Td2>
                    <Td>{room.status === true ? <BtnGreen>Available</BtnGreen> : <BtnRed>Booked</BtnRed>}</Td>
                </TrElement>
            ).slice(firsIndex, lastIndex)}
        </Table>

        // <DivContainer>
        //     <Container>
        //         <DivCheck>                    
                    
        //             <P>Room Name</P>
        //         </DivCheck>

        //         <DivMid>
        //             <P>Bed Type</P>
        //             <P>Room Floor</P>
        //             <P>Facilities</P>
        //         </DivMid>

        //         <DivCabecera>
        //             <P>Rate</P>
        //             <P>Status</P>
        //         </DivCabecera>
                
        //     </Container>

        //     {rooms.map((room,i) => 
        //         <ContainerRooms key={i} >
        //             <DivCheckRooms onClick={() => handleIdRoom(room._id)}>                                            

        //                 <DivImg img={room.foto}>
        //                     <img src={`${room.foto}`}/>
        //                 </DivImg>
                        
        //                 <DivData>
        //                     <Id>{room._id}</Id>
        //                     <P>Number room: {room.number}</P>
        //                 </DivData>
                        
        //             </DivCheckRooms>

        //             <DivMidDatos>
        //                 <Pd>{room.bed_type}</Pd>
        //                 <P>Flooo A-{room.room_floor}</P>
        //                 <P>{room.facilities}</P>                                                                       
        //             </DivMidDatos>

        //             <Div>
        //                 <DivPrecio>
        //                     <P>{room.price}€</P> 
        //                     <Pn>/night</Pn>
        //                 </DivPrecio>
                        
        //                 <P>{room.status === true ? <BtnGreen>Available</BtnGreen> : <BtnRed>Booked</BtnRed>}</P>
                       
        //             </Div>

        //             <DivMenuPuntos onClick={() => handleDeleteRoom(room._id)}>
        //                 {<AiOutlineMore/>}
        //             </DivMenuPuntos>
                   
                    
        //         </ContainerRooms>

        //     ).slice(firsIndex, lastIndex)}
            
        // </DivContainer>
    )
}

