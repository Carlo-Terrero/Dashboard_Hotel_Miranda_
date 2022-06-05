import React from 'react';
import Popup from 'reactjs-popup';

import styled from 'styled-components';

const StyledPopup = styled(Popup)`
    &-overlay{
        width: 400px;
        height: 300px;
        background-color: #FFFFFF;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23FFFFFF' cx='50' cy='0' r='50'/%3E%3Cg fill='%23f6f6f6' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ededed' cx='50' cy='100' r='50'/%3E%3Cg fill='%23e4e4e4' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23dbdbdb' cx='50' cy='200' r='50'/%3E%3Cg fill='%23d2d2d2' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c9c9c9' cx='50' cy='300' r='50'/%3E%3Cg fill='%23c0c0c0' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23b7b7b7' cx='50' cy='400' r='50'/%3E%3Cg fill='%23aeaeae' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a6a6a6' cx='50' cy='500' r='50'/%3E%3Cg fill='%239d9d9d' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23959595' cx='50' cy='600' r='50'/%3E%3Cg fill='%238d8d8d' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23848484' cx='50' cy='700' r='50'/%3E%3Cg fill='%237c7c7c' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23747474' cx='50' cy='800' r='50'/%3E%3Cg fill='%236c6c6c' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23646464' cx='50' cy='900' r='50'/%3E%3Cg fill='%235d5d5d' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23555555' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: contain;;
        border-radius: 25px;
        margin: auto;
        border: 2rem;

        div{
            color: white;
            margin: 0 3rem;
        }
    }

`;

const Button = styled.button`
    color: black;
    background: green;
    height: 2.5rem;
    border: none;
    width: 7rem;
    border-radius: 10px;
`;

export const PopupViewNotes = (props) => {

    return(
        <StyledPopup trigger={<Button> View Notes</Button>} 
            modal
            lockScroll
        >

            <div> {props.elementID}</div>

        </StyledPopup>
        
    )
}