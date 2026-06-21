import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Home from './pages/home.js';
import Destinations from './pages/destinations.js';
import Booking from './pages/booking.js';
import Contact from './pages/contact.js';
import Login from './pages/login.js';
import Signup from './pages/signup.js';

function App(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;