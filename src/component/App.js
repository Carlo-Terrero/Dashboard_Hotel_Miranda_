import React, {useReducer, createContext} from 'react';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom';

import { NavBarSuperior } from './navBar/navBarSuperior';
import { Bookings } from "./pages/bookings";
import { Concierge } from "./pages/concierge";
import { Dashboard } from "./pages/dashboard";
import { User } from "./pages/users";
import { Rooms } from "./pages/rooms";
import { Guest } from "./pages/guest";
import { Auth } from "./pages/auth";
import { GuestDetails } from "./details/guestDetails";
import { ConsciergeDetail } from "./details/consciergeDetail";
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

            <Route path="/bookings" element={<Bookings/>} />

            <Route path="/rooms" element={<Rooms/>} />
            <Route path="/rooms/:id" element={<RoomDetails/>} />

            <Route path="/concierge" element={<Concierge/>} />
            <Route path="/concierge/:id" element={<ConsciergeDetail/>} />
            
            <Route path="/user" element={<User dispatch={dispatch}/>} />

            <Route path="/guest" element={<Guest/>} />
            <Route path="/guest/:id" element={<GuestDetails/>} />
          </Routes>
          
        </Router>
      </LogingContext.Provider>
      
    </div>
  );
}

export default App;
