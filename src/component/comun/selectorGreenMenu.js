import React, {useState} from 'react';

import styled from 'styled-components'


const MiniDiv = styled.div`
    justify-content: space-between;
    display: flex;
    gap: 0;
    margin-bottom: 0.3rem;

`;

const Select = styled.p`
    border-bottom: ${props=> props.isActive ? "green" : "grey" } 2px solid;
    color: ${props=> props.isActive ? "green" : "grey" } ;
    padding-bottom: 1rem;
    width: 10rem;
    text-align: center;
    cursor: pointer;
`


export const SelectorGreenMenu = (props) => {
    
    const [isActive,setIsActive]=useState(props.selectores[0]);

    function handleClick(date){
        console.log(date)
        setIsActive(date)
    }
   

    return(
        <MiniDiv>
            {props.selectores.map((selector,i) => 
                <Select key={i} isActive={isActive === selector} onClick={()=>handleClick(selector)}>{selector }</Select>
                
                )}
                
            {/* <P>All Employee</P>
                    
            <P>Active Employee</P>
            {console.log(props.selectores[1])}
            <P>Inactive Employee</P> */}
        </MiniDiv>
    )
}



/*
const ControlDiv = styled.div`
    justify-content: space-between;
    display: flex;
    gap: 2rem;
    margin-bottom: 0.3rem;
`;

const MiniDiv = styled(ControlDiv)`
    justify-content: space-between; 
    gap: 0;   
`;
 */

