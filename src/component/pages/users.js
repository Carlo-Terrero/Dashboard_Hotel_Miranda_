import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { 
    getUsers,
    usersListDate
} from "../slice/userSlice";

import styled from "styled-components";

import { ConciergeList } from "../lists/conciergeList";
import { Paginador } from "../comun/paginador";
import { BtnNewEst } from "../comun/btnNewEst";
import { SelectorGreenMenu } from "../comun/selectorGreenMenu";
import { PopupNewUser } from "../comun/popupNewUser";

const Div =  styled.div` 
    padding: 2rem;
    display: grid;
    padding-left: 3.5rem;
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
    const dispatch = useDispatch();
    const users = useSelector(usersListDate);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        
            <Div>
                <ControlDiv>
                    <SelectorGreenMenu selectores={selectores}/>                               

                    <ControlDiv>

                        <NewUser onClick={() => {navigate('newuser')}}>New user</NewUser>

                        <BtnNewEst/>
                        
                    </ControlDiv>
                   
                </ControlDiv>

                <div>
                    <ConciergeList concierges={users}/>                    
                </div>

                <Paginador paginas={8}/>

            </Div>
            
        
        
    )
}

