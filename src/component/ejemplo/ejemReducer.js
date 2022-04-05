import React, {useReducer} from "react";


export const EjemReducer = () =>{
      
    const reducer = (state, action) => {
        switch (action.type) {
            case 'PET':
                return { ...state, pet: action.value }
            case 'COLOR':
                return { ...state, color: action.value }
            case 'NAME':
                return { ...state, name: action.value }
            default:
                return state;
        }
    }

    /* es lo mismo
    const reducer = (state, action) => {
        switch (action.type) {
            case 'PET':
                return { ...state, pet: action.value }
            case 'COLOR':
                return { ...state, color: action.value }
            case 'NAME':
                return { ...state, name: action.value }
            default:
                return state;
        }
    } */
      
    const initialState = {
        color: 'black',
        pet: 'cat',
        name: 'carlos',
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (

        <div>
            <label>Choose a color and a pet: </label>
            <br />
            <select
                value={state.color}
                onChange={event => {
                    dispatch({ type: 'COLOR', value: event.target.value })
                }}
            >
                <option value="black">Black</option>
                <option value="pink">Pink</option>
                <option value="blue">Blue</option>
            </select>

            <select
                value={state.pet}
                onChange={event => {
                    dispatch({ type: 'PET', value: event.target.value })
                }}
            >
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="mouse">Mouse</option>
            </select>

            <input 
                value={state.name}
                onChange={event => {
                    dispatch({ type: 'NAME', value: event.target.value})
                }}
            />

            
            <br />
            <br />
            You chose a {state.color} {state.pet} {state.name}

      

        </div>
    )
}

