import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { UserList } from "../lists/userList";
import { Paginador } from "../comun/paginador";
import { BtnNewEst } from "../comun/btnNewEst";
import { SelectorGreenMenu } from "../comun/selectorGreenMenu";

const Div =  styled.div` 
    display: grid;
    margin: 3rem 15%;
`;

const ControlDiv = styled.div`
    justify-content: space-between;
    display: flex;
    gap: 2rem;
    margin-bottom: 0.3rem;
`;

const NewUser = styled.button`
    color: white;
    background: #013401;
    border: none;
    border-radius: 10px;
    width: 170px;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Users = () =>{
    
    const selectores = ['All Employee', 'Active Employee', 'Inactive Employee']
    const navigate = useNavigate();

    const limit = 10;

    const [currentPage, setCurrentPage] = useState(1);
    const [numElementList, setNumElementList] = useState(1);

    const lastIndex = currentPage * limit;
    const firsIndex = lastIndex - limit;



    return (
        <Div>
            <ControlDiv>
                <SelectorGreenMenu selectores={selectores}/>                               

                <ControlDiv>

                    <NewUser onClick={() => {navigate('newuser')}}>+ New user</NewUser>

                    <BtnNewEst/>
                    
                </ControlDiv>
                
            </ControlDiv>

            <div>
                <UserList lastIndex={lastIndex} firsIndex={firsIndex} setNumElementList={setNumElementList}/>                    
            </div>

            <Paginador limit={limit} elementList={numElementList} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

        </Div>
    )
}

