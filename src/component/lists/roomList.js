import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    background: grey;
    border-radius: 15px;
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

    const handleClick = (date) => {
        console.log('hola', date)
        navigate(`${date}`)
    }

    return(
        <DivContainer>
            <Container>
                <DivCheck>                    
                    <Check type="checkbox" id="cbox1" value="first_checkbox" /> 
                    
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
                <ContainerRooms key={i} onClick={() => handleClick(room.id)}>
                    <DivCheckRooms>                    
                        <Check type="checkbox" id={`cbox${i}`} value="first_checkbox" /> 

                        <DivImg>
                            img aqui
                        </DivImg>
                        
                        <DivData>
                            <Id>{room.id}</Id>
                            <P>{room.first_name}</P>
                        </DivData>
                        
                    </DivCheckRooms>

                    <DivMidDatos>
                        <Pd>{room.bed_type}</Pd>
                        <P>{room.room_floor}</P>
                        <P>{room.facilities}</P>                                                                       
                    </DivMidDatos>

                    <Div>
                        <DivPrecio>
                            <P>{room.rate} </P> 
                            <Pn> /night</Pn>
                        </DivPrecio>
                        
                        <P>{room.status === true ? <BtnGreen>Available</BtnGreen> : <BtnRed>Booked</BtnRed>}</P>
                       
                    </Div>

                    <DivMenuPuntos>
                        {<AiOutlineMore></AiOutlineMore>}
                    </DivMenuPuntos>
                   
                    
                </ContainerRooms>

            )}
            
        </DivContainer>
    )
}