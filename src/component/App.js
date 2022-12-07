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
import { BookingsDetails } from "./details/bookingDetails";
import { UserDetail } from "./details/userDetail";
import { RoomDetails } from "./details/roomDetails";
import { Navigate } from "react-router-dom";
import { NewUser } from './newElement/newUser';
import { NewRoom } from './newElement/newRoom';
// Configuracion de del Reducer
// Esta es la funcion que se encarga de gestionar los datos con los que trabajaremos
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {auth: action.value.auth, user: action.value.user, email: action.value.email }
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

//Este componte se encarga de privatizar las urls si no se esta permitido el
function PrivateRoute({ auth ,children}) {
  return auth ? children : <Navigate to="/" replace={true} />;
}

function App() {  

  // Inicializacion de reducer
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  return (
    <div className="App">
      <LogingContext.Provider
            value={state}            
          >
        <Router>

          <Routes>

            <Route path="/"  element={<Auth dispatch={dispatch}/>} />

            <Route path='/dashboard' element={
              <PrivateRoute auth={state.auth}>
                <NavBarSuperior dispatch={dispatch} />
                <Dashboard/>
              </PrivateRoute>
            } />

            <Route path="/rooms" element={
                <PrivateRoute auth={state.auth}>
                  <NavBarSuperior dispatch={dispatch} />
                  <Rooms/>
                </PrivateRoute>
              }             
            />

            <Route path="/rooms/:id" element={              
                <PrivateRoute auth={state.auth}>
                  <NavBarSuperior dispatch={dispatch} />
                  <RoomDetails/>
                </PrivateRoute>
              } 
            />

            <Route path="/rooms/newroom" element={              
                <PrivateRoute auth={state.auth}>
                  <NavBarSuperior dispatch={dispatch} />
                  <NewRoom/>
                </PrivateRoute>
              } 
            />

            <Route path="/Users" element={
                <PrivateRoute auth={state.auth}>
                  <NavBarSuperior dispatch={dispatch} />
                  <Users/>
                </PrivateRoute>
              }
            />

            <Route path="/Users/newuser" element={
                <PrivateRoute auth={state.auth}>
                  <NavBarSuperior dispatch={dispatch} />
                  <NewUser/>
                </PrivateRoute>
              }
            />
            <Route path="/Users/:id" element={
                <PrivateRoute auth={state.auth}>
                  <NavBarSuperior dispatch={dispatch} />
                  <UserDetail/>
                </PrivateRoute>
              }
            />
            
            <Route path="/userEdit" element={
                <PrivateRoute auth={state.auth}>
                  <NavBarSuperior dispatch={dispatch} />
                  <UserEdit dispatch={dispatch}/>
                </PrivateRoute>
              }
            />

            <Route path="/bookings" element={
                <PrivateRoute auth={state.auth}>
                  <NavBarSuperior dispatch={dispatch} />
                  <Bookings/>
                </PrivateRoute>
              }
            />
                  
            <Route path="/bookings/:id" element={
                <PrivateRoute auth={state.auth}>
                  <NavBarSuperior dispatch={dispatch} />
                  <BookingsDetails/>
                </PrivateRoute>
              }
            />
          </Routes>
          
        </Router>
     
      </LogingContext.Provider>
      
    </div>
  );
}

export default App;

/**
  
 */