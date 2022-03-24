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

function App() {

  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavBarSuperior auth={auth} setAuth={setAuth}/>

        <Routes>

          <Route exat path='/' element={<Dashboard/>}/>
          <Route path="/auth"  element={<Auth setAuth={setAuth}/>}  />
          <Route exat path='/dashboard' element={<Dashboard/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/concierge" element={<Concierge/>}/>
          <Route path="/user" element={<User/>} />
          <Route path="/guest" element={<Guest/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
