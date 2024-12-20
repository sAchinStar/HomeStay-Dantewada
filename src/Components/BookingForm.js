import React, { useState } from "react";
import { submitBooking } from "../api";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await submitBooking(formData);
    if (response.success) {
      alert("Booking Successful!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="contact" placeholder="Contact" onChange={handleChange} required />
      <input name="checkIn" type="date" onChange={handleChange} required />
      <input name="checkOut" type="date" onChange={handleChange} required />
      <input name="guests" type="number" onChange={handleChange} required />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
