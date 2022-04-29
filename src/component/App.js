import React, {useReducer, createContext} from 'react';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom';

import { NavBarSuperior } from './navBar/navBarSuperior';
import { Bookings } from "./pages/bookings";
import { Users } from "./pages/users";
import { Dashboard } from "./pages/dashboard";
import { UserEdit } from "./pages/usersEdit";
import { Rooms } from "./pages/rooms";
//import { Guest } from "./pages/bookings";
import { Auth } from "./pages/auth";
import { BookingsDetails } from "./details/guestDetails";
import { UserDetail } from "./details/userDetail";
import { RoomDetails } from "./details/roomDetails";

// Configuracion de del Reducer
// Esta es la funcion que se encarga de gestionar los datos con los que trabajaremos
const reducer = (state, action) => {
  switch (action.type) {
    case 'NAME':
      return {...state, name: action.value}
    case 'EMAIL':
      return {...state, email: action.value}
    case 'AUTH':
      return {...state, auth: action.value}
    default:
      return state
  }
}

//Datos iniciales
const initialState = {
  name: 'no logg',
  email: 'no logg mail',
  auth: false,
}

// Configuracion del Context
export const LogingContext = createContext(initialState);

function App() {  

  // Inicializacion de reducer
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <LogingContext.Provider
            value={state}
          /* value={userloging} */
          >

        <Router>

          <NavBarSuperior dispatch={dispatch} />

          <Routes>

            <Route path="/"  element={<Auth dispatch={dispatch}/>} />
            <Route path='/dashboard' element={<Dashboard/>} />

            <Route path="/rooms" element={<Rooms/>} />
            <Route path="/rooms/:id" element={<RoomDetails/>} />

            <Route path="/Users" element={<Users/>} />
            <Route path="/Users/:id" element={<UserDetail/>} />
            
            <Route path="/userEdit" element={<UserEdit dispatch={dispatch}/>} />

            <Route path="/bookings" element={<Bookings/>} />
            <Route path="/bookings/:id" element={<BookingsDetails/>} />
          </Routes>
          
        </Router>
      </LogingContext.Provider>
      
    </div>
  );
}

export default App;
