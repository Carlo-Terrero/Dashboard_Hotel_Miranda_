import React from 'react';

import styled from 'styled-components'


const MiniDiv = styled.div`
    justify-content: space-between;
    display: flex;
    gap: 0;
    margin-bottom: 0.3rem;

    p{
        border-bottom: #80808075 1px solid;
        color: #464444;
        padding-bottom: 1rem;
        width: 10rem;
        text-align: center;
    }
`;



export const SelectorGreenMenu = (props) => {

    return(
        <MiniDiv>
            {props.selectores.map((s,i) => 
                <p key={i}>{s}</p>
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

