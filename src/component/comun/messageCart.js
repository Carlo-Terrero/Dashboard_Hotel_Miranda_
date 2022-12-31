import React,{useEffect, useState} from "react";
import styled from "styled-components";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { getMessage, messageListData } from "../slice/messageSlice";
import { BsArrowRight, BsArrowLeft, BsCheckCircle } from  "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ContainerDiv = styled.div`
    background-color: white;
    padding: 1rem 2.8rem 2.8rem 3rem;
    border-radius: 20px;

    h4{
        margin-top: 0.6rem;
    }
`;

const ContainerElement = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`;

const ContainerMessage = styled.div`
    max-width: 300px;
    padding: 1rem;
    border-radius: 20px;
    border: solid 1px #8080801c;

    :hover{
        -webkit-box-shadow: -1px 20px 34px 7px rgba(0,0,0,0.34);
        -moz-box-shadow: -1px 20px 34px 7px rgba(0,0,0,0.34);
        box-shadow: -1px 20px 34px 7px rgba(0,0,0,0.34);
    }
`;

const ContainerData = styled.div`
    display: flex;
    padding: 0;
    gap: 1rem;
`;

const ContainerImg = styled.div`
    background-color: gray;
    min-width: 70px;
    border-radius: 20px;
    height: 70px;
`;

const ContainerState = styled.div`
    float: left;
    margin-left: auto;
    margin-top: 2rem;
    padding-right: 1rem;
`;

const ContainerText = styled.div`
    height: 120px;

    p{
        margin: 0;
        padding: 0;
    }
`;

const Pdate = styled.p`
    color: grey;
    margin: 0;
    padding-top: 0.3rem;
`;

const ButtomLeft = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #0b870b;
    color: white;
    height: 55px;
    width: 55px;
    font-size: 1.7rem;
    margin-left: -5rem;
    
`;

const ButtomRight = styled(ButtomLeft)`
    margin-right: -5rem;
    margin-left: 0;
`;

export  const MessageCart = () => {

    const dispatch = useDispatch();
    
    const messageList = useSelector(messageListData);
    const limit = 3;

    const [ pageActual, setPageActual] = useState(1);
    const lastIndex = pageActual * limit;
    const firsIndex = lastIndex - limit;

    useEffect(() =>{
        dispatch(getMessage());

    }, [dispatch])

    const totalPages = () => {
        return Math.ceil(messageList.length / limit)
    }

    return(
        <ContainerDiv>
            <h4>Client Message</h4>

            <ContainerElement>

                {pageActual <= 1 ? '' : <ButtomLeft onClick={()=>setPageActual(pageActual - 1)}>
                    <BsArrowLeft/>
                </ButtomLeft>}

                {messageList.map((message, i) => 
                    <ContainerMessage key={i}>
                        <ContainerText>
                            <p>
                                {message.messageClient}
                            </p>
                        </ContainerText>
    
                        <ContainerData>
                            <ContainerImg>
                                
                            </ContainerImg>

                            <div>
                                <strong>{message.name}</strong>
                                <Pdate>{moment(message.date).format("LL")}</Pdate>
                            </div>

                            <ContainerState>
                                {message.read? <BsCheckCircle/> : <IoIosCloseCircleOutline/>}
                            </ContainerState>
                        </ContainerData>
                    </ContainerMessage>
                ).slice(firsIndex, lastIndex)}

                {pageActual === totalPages() ? '': <ButtomRight onClick={()=>setPageActual(pageActual + 1)}>
                    <BsArrowRight/>
                </ButtomRight>}

            </ContainerElement>

        </ContainerDiv>
    )
}
