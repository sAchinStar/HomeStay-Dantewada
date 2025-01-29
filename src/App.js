import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ListingsPage from "./Components/ListingsPage";
import DetailsPage from "./Components/DetailsPage";
import BookingForm from "./Components/BookingForm";
import ContactPage from "./Components/ContactPage";
import Navbar from "./Components/Navbar";
import TodayBooking from "./Components/TodayBooking";
import Footer from "./Components/Footer";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import "./App.css"
import Status from "./Components/Status";
// import ProtectRouter from "./Components/ProtectRouter";
// import SidebarSocial from "./Components/SidebarSocial"
const App = () => {
  return (
    <>
      <Router>
      <Navbar />
      {/* <SidebarSocial /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bookingfrom" element={<BookingForm />} />
          <Route path="/todaybooking" element={<TodayBooking />} />
          <Route path="login" element={<Login />} />
          
          // <Route element={<ProtectRouter />}>
          <Route path="/admin" element={<Admin />} />
          // </Route>
          <Route path="/status" element={<Status />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
