import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import styled from 'styled-components';

import {PopupViewNotes} from '../comun/popupViewNotes';

const BtnGreen = styled.button`
    color: black;
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

const BtnYellow = styled(BtnGreen)`
    color: green;
    background: yellow;
`;

const BtnLiveGrey = styled(BtnGreen)`
    color: grey;
    background: #3b3b3b3d;
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
                return <BtnYellow>Pending</BtnYellow>
            case state = 2:
                return <BtnLiveGrey>Canceled</BtnLiveGrey>
            case state = 3:
                return <BtnRed>Refund</BtnRed>
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
                <Th>State</Th>
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
                    <Td>{handleStatus(guest.state)}</Td>
                </TrElement>
            ).slice(firsIndex, lastIndex)}

        </Table>
    )
}