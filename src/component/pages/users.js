import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Este dato se va al garete cuando hagamo la conexion
import { conciergeData } from "../data/concierge";

import { 
    addUsers,
    editUsers,
    usersListDate,
    //fetchUsers,
} from "../slice/userSlice";

import styled from "styled-components";

import { ConciergeList } from "../lists/conciergeList";
import { Paginador } from "../comun/paginador";
import { BtnNewEst } from "../comun/btnNewEst";
import { SelectorGreenMenu } from "../comun/selectorGreenMenu";
import { PopupNewUser } from "../comun/popupNewUser";

const DivBase = styled.div`
    padding: 2rem;
`;

const Div =  styled.div` 
    display: grid;
    margin-left: 300px;
`;

const ControlDiv = styled.div`
    justify-content: space-between;
    display: flex;
    gap: 2rem;
    margin-bottom: 0.3rem;
`;

export const Users = () =>{
    
    const selectores = ['All Employee', 'Active Employee', 'Inactive Employee']

    //const conciergeListDate = useSelector(usersListDate);
    //const cc = useSelector(fetchConcierge());
  /*   const dispatch = useDispatch();
    
    const handleClickNewUsers = () => {
        //dispatch(getOneConcierge())
        
    }
    //console.log(conciergeListDate) */

    return (
        <DivBase>
            <Div>
                <ControlDiv>
                    <SelectorGreenMenu selectores={selectores}/>                               

                    <ControlDiv>

                        <PopupNewUser/>

                        <BtnNewEst/>
                        
                    </ControlDiv>
                   
                </ControlDiv>

                <div>
                    <ConciergeList concierges={conciergeData}/>                    
                </div>

                <Paginador paginas={8}/>

            </Div>
            
        </DivBase>
        
    )
}

