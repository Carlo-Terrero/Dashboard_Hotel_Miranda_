import React,{useEffect, useState} from "react";
import styled from "styled-components";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { getMessage, messageListData } from "../slice/messageSlice";
import { BsArrowRight, BsArrowLeft, BsCheckCircle } from  "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PaginatorService } from "../service/paginatorService";

//import { IoIosCloseCircleOutline } from "react-icons/"

const ContainerDiv = styled.div`
    background-color: white;
    padding: 1rem 1rem 3rem 3rem;
    border-radius: 20px;

    h4{
        margin-top: 0.6rem;
    }
`;

const ContainerElement = styled.div`
    display: flex;
    align-items: center;
`;

const ContainerMessage = styled.div`
    max-width: 300px;
    padding: 1rem;
    border-radius: 20px;
    border: solid 1px #8080801c;
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
    width: 140px;
    font-size: 1.7rem;
`;

const ButtomRight = styled(ButtomLeft)`

`;

export  const MessageCart = () => {

    const dispatch = useDispatch();
    
    const messageList = useSelector(messageListData);
    const limit = 3;
    
    
    const Paginador = new PaginatorService(limit, messageList);
    const [newDatoIterable, setNewDatoIterable] = useState([]);
    const [ pageActual, setPageActual] = useState(1);

    useEffect(() =>{
        dispatch(getMessage());
        setNewDatoIterable(Paginador.getNewDatosComponent());
        //setPageActual(1)
        //console.log({totalPages})
    }, [dispatch])

    const handlePrev = () => {
        /* pageActual <= 1 ? setPageActual(1) : setPageActual(pageActual - 1);
        //Paginador.change(pageActual);
        //setNewDatoIterable(Paginador.getNewDatosComponent());
        console.log('Prev ',pageActual, 'total',Paginador.totalPages());
        handleChange(); */
    }

    const handleNext = () => {
        /* pageActual >= Paginador.totalPages() ? setPageActual(Paginador.totalPages()) : setPageActual(pageActual + 1);
        //Paginador.change(pageActual);
        //setNewDatoIterable(Paginador.getNewDatosComponent());
        console.log('Next ',pageActual, 'total',Paginador.totalPages());
        handleChange(); */
    }

    const handleChange = () => {
        console.log('en handleChange -> ', pageActual);
        Paginador.change(pageActual);
        setNewDatoIterable(Paginador.getNewDatosComponent());
    }

    return(
        <ContainerDiv>
            <h4>Client Message</h4>

            <ContainerElement>

                {pageActual <= 1 ? '' : <ButtomLeft onClick={()=>handlePrev()}>
                    <BsArrowLeft/>
                </ButtomLeft>}

                { newDatoIterable.length === 0 ? '' :  newDatoIterable.map((message, i) => 
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
                )}

                {pageActual === Paginador.totalPages() ? '': <ButtomRight onClick={()=>handleNext()}>
                    <BsArrowRight/>
                </ButtomRight>}

            </ContainerElement>
            {pageActual}

        </ContainerDiv>
    )
}

    /* */
    /* let current_page = 1;
    let obj_per_page = 3;
    let newDatos = new Array;
    function totNumPages()
        {
            return Math.ceil(messageList.length / obj_per_page);
        }

    function prev()
        {
            if (current_page > 1) {
                current_page--;
                change(current_page);
            }
            console.log('prev')
        }
    
    function next()
        {
            if (current_page < totNumPages()) {
                current_page++;
                change(current_page);
            }
            console.log('next')
        }


    function change(page)
    {
        if (page < 1) page = 1;
        if (page > totNumPages()) page = totNumPages();
        for (let i = (page-1) * obj_per_page; i < (page * obj_per_page); i++) {
            console.log(messageList[i])
            newDatos.push(messageList[i])
        }

        console.log('-->',{newDatos})
    } */

    /* */