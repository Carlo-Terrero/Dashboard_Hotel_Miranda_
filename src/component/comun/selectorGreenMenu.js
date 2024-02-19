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

export const SelectorGreenMenu = ({selectores, returnData }) => {
    
    const [isActive,setIsActive] = useState(selectores[0]);

    function handleClick(date){
        setIsActive(date);
        returnData(date);
    }

    return(
        <MiniDiv>
            {selectores.map((selector,i) => 
                <Select key={i} isActive={isActive === selector} onClick={()=>handleClick(selector)}>
                    {selector }
                </Select>
            )}
        </MiniDiv>
    )
}
