import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import styled from 'styled-components';

import { AiOutlineMore } from 'react-icons/ai';

import {PopupViewNotes} from '../comun/popupViewNotes';

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
    border-top: none;
    padding-right: 3rem;
    align-items: center;
`;

const Div = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
`;

const DivCabecera = styled(Div)`
    gap: 9rem;
    margin-right: -2rem;
`;

const DivCheck = styled(Div)`
    align-items: baseline;
    width: 300px;
`;

const DivCheckRooms = styled(DivCheck)`
    align-items: center;
    gap: 1.5rem;
    margin: 0;
    cursor: pointer;    
`;

const DivData = styled.div`
    display: grid;
    gap: 0.5rem;

    P{
        margin: 0;
    }
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
    width: 8rem;
`;

const Id = styled(P)`
    color: green;
`;

const Check = styled.input`
    color: red;
    font-size:2rem;
`;

const DivImg = styled.div`
    background-image: url(${props => props.img});
    background-repeat: round;
    margin: 1rem 0;
    height: 3rem;    
    width: 3rem;
    border-radius: 15px;
`;

const BtnGreen = styled.button`
    color: black;
    background: green;
    height: 2.5rem;
    border: none;
    width: 7rem;
    border-radius: 10px;
    color: green;
    background: #43fe8b3d;
`;

const BtnRed = styled(BtnGreen)`
    color: red;
    background: #f2858566;
`;

const BtnLiveGrey = styled(BtnGreen)`
    color: grey;
    background: #3b3b3b3d;
`;

const BtnDarkGrey = styled(BtnGreen)`
    color: #d3d0d0;
    background: grey;
`;

const PRoom = styled(P)`
    width: 9rem;
`;

const Table = styled.table`
    border: #8080802e 0.1rem solid;
    padding: 0.5rem 2rem;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background: white;
    border-spacing: 0;
`;

const TrElement = styled.tr`
    height: 3.5rem;
    margin: 1rem;

    :hover{
        cursor: pointer;
    }
`;

const Th = styled.th`
    height: 40px;
    border-bottom: 0.1px solid #8080802e;
`;

const Td = styled.td`
    text-align: center;
    border-bottom: 0.1px solid #8080802e;
`;

const ThImg = styled(Td)`
    background-image: url(${props => props.img});
    background-repeat: round;
    margin: 1rem 0;
    height: 0rem;
    width: 5rem;
    border-radius: 15px;
`;

export const GuesteList = ({guests, lastIndex, firsIndex}) => {

    const navigate = useNavigate()

    const handleStatus = (state) => {        
        switch(state) {
            case state = 0:
                return <BtnGreen>Booked</BtnGreen>
            case state = 1:
                return <BtnRed>Refund</BtnRed>
            case state = 2:
                return <BtnLiveGrey>Pending</BtnLiveGrey>
            case state = 3:
                return <BtnDarkGrey>Canceled</BtnDarkGrey>
            default:
                return state;
        }
    }

    const handleClick = (id) => {
        navigate(`${id}`)
    }

    return(
        <Table>
            <tr>
                <Th>Guest</Th>
                <Th>Name</Th>
                <Th>Order Date</Th>
                <Th>Check In</Th>
                <Th>Check Out</Th>
                <Th>Special Request</Th>
                <Th>Room type</Th>
                <Th>Status</Th>
            </tr>

            {guests.map((guest) =>
                <TrElement key={guest._id} onClick={() => handleClick(guest._id)}>
                    <ThImg img={guest.fotos}/>
                    <Td>{guest.name}</Td>
                    <Td>{moment(guest.order_date).format( "DD-MM-YYYY")}</Td>
                    <Td>{moment(guest.check_In).format( "DD-MM-YYYY")}</Td>
                    <Td>{moment(guest.check_Out).format( "DD-MM-YYYY")}</Td>
                    <Td><PopupViewNotes elementID={guest.special_request}/></Td>
                    <Td>{guest.room_type}</Td>
                    <Td>{handleStatus(guest.status)}</Td>
                </TrElement>
            ).slice(firsIndex, lastIndex)}

        </Table>
    )
}