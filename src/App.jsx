import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Pages/Navbar';
import Home from './Component/Pages/Home';
import Search from './Component/Pages/Search';
import Howutworks from './Component/Pages/Howutworks';
import Testimonials from './Component/Pages/Testimonials';
import Login from './Component/Pages/Login';
import Signup from './Component/Pages/Signup';
import Explore from './Component/Pages/Explore';
import Footer from './Component/Pages/Footer';
import Details from './Component/Pages/Details/Details';
import BookingPage from './Component/Pages/Details/Booking';
import BookingConfirm from './Component/Pages/Details/BookingConfirm';

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Home></Home> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/explore" element={<Explore></Explore>} />
        <Route path="/how-it-works" element={<Howutworks />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/details" element={<Details />} />
        <Route path="/booking" element={<BookingPage></BookingPage>} />
        <Route path="/bookingConfirm" element={<BookingConfirm></BookingConfirm>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
