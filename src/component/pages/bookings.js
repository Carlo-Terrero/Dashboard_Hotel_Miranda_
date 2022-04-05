import React, {useReducer} from "react";

import styled from "styled-components";

import {User} from "../pages/users"

const Div =  styled.div` 
    margin-left: 300px;
`;


export const Bookings = () =>{
     

    const types = {
        PET: 'PET',
        COLOR: 'COLOR',
        NAME: 'NAME',
    }
      
    const reducer = (state, action) => {
        switch (action.type) {
            case types.PET:
                return { ...state, pet: action.value }
            case types.COLOR:
                return { ...state, color: action.value }
            case types.NAME:
                return { ...state, name: action.value }
            default:
                return state;
        }
    }
      
    const initialState = {
        color: 'black',
        pet: 'cat',
        name: 'carlos',
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (

        <Div>
            <label>Choose a color and a pet: </label>
            <br />
            <select
                value={state.color}
                onChange={event => {
                    dispatch({ type: types.COLOR, value: event.target.value })
                }}
            >
                <option value="black">Black</option>
                <option value="pink">Pink</option>
                <option value="blue">Blue</option>
            </select>

            <select
                value={state.pet}
                onChange={event => {
                    dispatch({ type: types.PET, value: event.target.value })
                }}
            >
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="mouse">Mouse</option>
            </select>

            <input 
                value={state.name}
                onChange={event => {
                    dispatch({ type: types.NAME, value: event.target.value})
                }}
            />

            
            <br />
            <br />
            You chose a {state.color} {state.pet} {state.name}

            <br />
            <br />
            <User/>
            {/* <User2/> */}

        </Div>
    )
}

