import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { getUsers, usersListDate } from "../slice/userSlice";

import styled from "styled-components";

import { UserList } from "../lists/userList";
import { Paginador } from "../comun/paginador";
import { BtnNewEst } from "../comun/btnNewEst";
import { SelectorGreenMenu } from "../comun/selectorGreenMenu";
import { useEffect } from "react";

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

    const dispatch = useDispatch();
    const users = useSelector(usersListDate);

    //El dato es users
    const [filterList, setFilterList] = useState();

    const [currentPage, setCurrentPage] = useState(1);    
    const limit = 10;
    const lastIndex = currentPage * limit;
    const firsIndex = lastIndex - limit;

    useEffect(()=>{
        dispatch(getUsers());
        setFilterList(users);
    },[dispatch])

    function dataFilter(filteredOut){
        if(filteredOut === selectores[0]){
            setFilterList(users);
            return;
        }

        const state = filteredOut === selectores[1] ? true : false;
        const elementSelected = users.filter(element => element.estate === state);
        setFilterList(elementSelected);
    }

    return (
        <Div>
            <ControlDiv>

                <SelectorGreenMenu selectores={selectores} returnData={dataFilter}/>                               

                <ControlDiv>

                    <NewUser onClick={() => {navigate('newuser')}}>
                        + New user
                    </NewUser>

                    {/* <BtnNewEst/> */}
                    
                </ControlDiv>
                
            </ControlDiv>

            <UserList lastIndex={lastIndex} firsIndex={firsIndex} users={filterList}/>                    

            <Paginador limit={limit} elementList={filterList.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

        </Div>
    )
}

