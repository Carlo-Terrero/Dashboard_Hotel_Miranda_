import React, {useState} from 'react';
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

function App() {

  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavBarSuperior auth={auth} setAuth={setAuth} />

        <Routes>

          <Route path="/"  element={<Auth setAuth={setAuth} auth={auth}/>} />
          <Route path='/dashboard' element={<Dashboard/>} />

          <Route path="/bookings" element={<Bookings/>} />

          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/rooms/:id" element={<RoomDetails/>} />

          <Route path="/concierge" element={<Concierge/>} />
          <Route path="/concierge/:id" element={<ConsciergeDetail/>} />
          
          <Route path="/user" element={<User/>} />

          <Route path="/guest" element={<Guest/>} />
          <Route path="/guest/:id" element={<GuestDetails/>} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
