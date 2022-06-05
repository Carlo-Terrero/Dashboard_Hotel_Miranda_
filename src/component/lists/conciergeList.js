import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUsers} from '../slice/userSlice';

import styled from 'styled-components';

import { AiOutlineMore } from 'react-icons/ai';
import { MdOutlineLocalPhone } from 'react-icons/md';

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
    align-items: center;
`;

const DivCabecera = styled(Div)`
    gap: 7rem;
    margin-right: 2rem;
`;

/* const DivMid = styled(Div)`
    width: 37rem;
    gap: 7rem;
    margin-left: -4rem;
`; */

const DivCheck = styled(Div)`
    align-items: baseline;
    width: 300px;
    margin-right: -5rem;
`;

const DivCheckRooms = styled(DivCheck)`
    align-items: center;
    gap: 1.5rem;
    margin: 0;
`;

const DivPrecio = styled(Div)`
    gap: 0.5rem;
    width: 100px;
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
    height: 5rem;    
    width: 5rem;
   
    border-radius: 15px;
`;

const PGreen = styled.p`
    color: green;
    width: 83px;
    
`;

const PRed = styled(PGreen)`
    color: red;
`;

const Pv = styled.p`
    color: green;
`;

const DivIcon = styled.div`
    font-size: 1.5rem;
`;

const DivSchedule = styled.div`
    width: 200px;
`;


export const ConciergeList = (props) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleClick = (id) => {        
        navigate(`${id}`);
    }

    const handleClickPoint = () => {
        dispatch(deleteUsers())
        console.log('kk')
        
    }

    return(
        <DivContainer>
            <Container>
                <DivCheck>                    
                    
                    <P>Name</P>
                </DivCheck>

                {/* <DivMid> */}
                    <P>Job Desk</P>
                    <P>Schedule</P>                    
                {/* </DivMid> */}

                <DivCabecera>
                    <P>Contact</P>
                    <P>Status</P>
                </DivCabecera>
                
            </Container>
            
            {props.concierges.map((concierge,i) => 
                <ContainerRooms key={i} >
                    <DivCheckRooms onClick={() => handleClick(concierge.id)}>                    

                        <DivImg img={concierge.foto}>
                            
                        </DivImg>
                        
                        <DivData>
                            <P>{concierge.name}</P>
                            <Id>{concierge._id}</Id>
                            <P>{concierge.start_date}</P>
                        </DivData>
                        
                    </DivCheckRooms>

                    {/* <DivMidDatos> */}
                        <Pd>{concierge.description}</Pd>
                      
                      <DivSchedule>
                        <P>{concierge.schedule}</P>
                        <Pv>Check schedule</Pv>
                      </DivSchedule>
                                                                                               
                    {/* </DivMidDatos> */}

                    <Div>
                        <DivPrecio>
                            <DivIcon>
                                <MdOutlineLocalPhone/>
                            </DivIcon>
                            
                            <P>{concierge.contact} </P> 
                           
                        </DivPrecio>
                        
                        <P>{concierge.estate === true ? <PGreen>ACTIVE</PGreen> : <PRed>INACTIVE</PRed>}</P>
                       
                    </Div>

                    <DivMenuPuntos onClick={handleClickPoint}>
                        {<AiOutlineMore/>}
                    </DivMenuPuntos>
                   
                    
                </ContainerRooms>

            )}
            
            
        </DivContainer>
    )
}