import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ListingsPage from "./Components/ListingsPage";
import DetailsPage from "./Components/DetailsPage";
import BookingForm from "./Components/BookingForm";
import ContactPage from "./Components/ContactPage";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
