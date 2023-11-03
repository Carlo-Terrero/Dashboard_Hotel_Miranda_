import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import styled from 'styled-components';

import { MdOutlineLocalPhone } from 'react-icons/md';

const PGreen = styled.p`
    color: green;
    width: 83px;
`;

const PRed = styled(PGreen)`
    color: red;
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
    height: 5rem;
    width: 5rem;
    border-radius: 15px;
`;

export const UserList = ({lastIndex, firsIndex ,users}) => {

    const navigate = useNavigate();

    const handleClick = (id) => {        
        navigate(`${id}`);
    }
    // console.log(users)

    return(
        <Table>
            <tr>
                <Th>Photo</Th>
                <Th>Name</Th>
                <Th>Job Desk</Th>
                <Th>Schedule</Th>
                <Th>Contact</Th>
                <Th>Status</Th>
            </tr>
            {users.map((user) =>
                <TrElement key={user._id} onClick={() => handleClick(user._id)}>
                    <ThImg img={user.foto}/>
                    <Td>{user.name} {moment(user.start_date).format( "DD-MM-YYYY")}</Td>
                    <Td>{user.description}</Td>
                    <Td>{user.schedule ?? "-"}</Td>
                    <Td><MdOutlineLocalPhone/> {user.contact}</Td>
                    <Td>{user.estate === true ? <PGreen>ACTIVE</PGreen> : <PRed>INACTIVE</PRed>}</Td>
                </TrElement>
            ).slice(firsIndex, lastIndex)}
        </Table>
    )
}