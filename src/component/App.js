import {BrowserRouter as Router , Routes, Route } from 'react-router-dom';

import { NavBarLateral } from "./navBar/navBarLateral";
import { NavBarSuperior } from './navBar/navBarSuperior';
import { Bookings } from "./pages/bookings";
import { Contact } from "./pages/contact";
import { Dashboard } from "./pages/dashboard";
import { User } from "./pages/users";
import { Rooms } from "./pages/rooms";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBarSuperior/>
        <NavBarLateral/>
        

        <Routes>

          <Route exat path='/' element={<Dashboard/>}/>
          <Route exat path='/dashboard' element={<Dashboard/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/user" element={<User/>} />

        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
