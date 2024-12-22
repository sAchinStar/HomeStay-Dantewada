import React, { useState, useEffect } from 'react';
import './BookRoom.css';
// import bookform4 from '../assets/bookform4.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from "sweetalert2";
import { format, differenceInDays, eachDayOfInterval, isWithinInterval } from 'date-fns';

const BookingForm = ({ onAddCustomer = () => {} }) => {
    const [customerName, setCustomerName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [userType, setUserType] = useState('General');
    const [location, setLocation] = useState('Dantewada');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    // const [numberOfRooms, setNumberOfRooms] = useState(1);
    const [numberOfDays, setNumberOfDays] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [roomsData, setRoomsData] = useState([]);








    const locationRoomLimits = {
        "Dantewada": 6,
        "Kirandul": 4,
        "Geedam": 2,
        "Barsur": 2
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    useEffect(() => {
        if (checkOutDate >= checkInDate) {
            setNumberOfDays(differenceInDays(checkOutDate, checkInDate) + 1);
        } else {
            setNumberOfDays(1);
        }
    }, [checkInDate, checkOutDate]);

    const fetchRooms = async () => {
        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbxEBL7mAh7-bfdR3S3GiJbuYtHcbAswiTFbhIgaqLKpFnXzif-htHgoZRJ8bD2tnD7c/exec");
            const data = await res.json();
            if (data.rooms) {
                setRoomsData(data.rooms);
            } else {
                console.error('No room data available:', data);
            }
        } catch (error) {
            console.error('Error fetching rooms:', error);
        }
    };

    const checkRoomAvailability = (location, checkIn, checkOut, requestedRooms) => {
        const daysToCheck = eachDayOfInterval({ start: new Date(checkIn), end: new Date(checkOut) });
        
        for (const day of daysToCheck) {
            const acceptedBookings = roomsData.filter((booking) => {
                const bookingCheckIn = new Date(booking["Check In Time"]);
                const bookingCheckOut = new Date(booking["Check Out Time"]);
                return (
                    booking.Location === location &&
                    booking.Status === "Accepted" &&
                    isWithinInterval(day, { start: bookingCheckIn, end: bookingCheckOut })
                );
            });

            const totalBookedRooms = acceptedBookings.reduce((total, booking) => {
                return total + parseInt(booking["No Off Room"], 10);
            }, 0);

            const maxRoomsAvailable = locationRoomLimits[location] || 0;
            const availableRooms = maxRoomsAvailable - totalBookedRooms;

            if (availableRooms < requestedRooms) {
                return { isAvailable: false, availableRooms };
            }
        }

        return { isAvailable: true, availableRooms: requestedRooms };
    };

    const handleNameChange = (e) => {
        const regex = /^[A-Za-z\s]*$/;
        if (regex.test(e.target.value)) {
            setCustomerName(e.target.value);
        }
    };

    const handlePhoneNumberChange = (e) => {
        const regex = /^[0-9]*$/;
        const value = e.target.value;

        if (regex.test(value) && value.length <= 10) {
            setMobileNumber(value);
        } else {
            alert("Please enter a valid mobile number");
        }
    };

    const checkAvailabilityAndSubmit = async (e) => {
        e.preventDefault();
        
        setIsLoading(true);

        if (checkOutDate < checkInDate) {
            alert('Check-out date must be after the check-in date.');
            setIsLoading(false);
            return;
        }

        // const { isAvailable, availableRooms } = checkRoomAvailability(location, checkInDate, checkOutDate, numberOfRooms);
        const { isAvailable, availableRooms } = checkRoomAvailability(location, checkInDate, checkOutDate);

        if (!isAvailable) {
            Swal.fire({
                title: "Rooms Not Available",
                text: `Only ${availableRooms} room(s) are available at ${location} for the selected dates.`,
                icon: "warning",
                confirmButtonText: "OK"
            });
            setIsLoading(false);
            return;
        }

        submitData();
    };

    const submitData = async () => {
        const newCustomer = {
            id: new Date().getTime(),
            checkInTime: format(checkInDate, 'dd/MM/yyyy'),
            checkOutTime: format(checkOutDate, 'dd/MM/yyyy'),
            fullName: customerName,
            moNo: mobileNumber,
            location: location,
            customerType: userType,
            // noOffRoom: numberOfRooms,
            totalGuest: numberOfGuests,
            totalDays: numberOfDays,
        };

        try {
            await fetch('https://script.google.com/macros/s/AKfycbxEBL7mAh7-bfdR3S3GiJbuYtHcbAswiTFbhIgaqLKpFnXzif-htHgoZRJ8bD2tnD7c/exec', {
            //https://script.google.com/macros/s/AKfycbxEBL7mAh7-bfdR3S3GiJbuYtHcbAswiTFbhIgaqLKpFnXzif-htHgoZRJ8bD2tnD7c/exec
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCustomer),
                mode: 'no-cors'
            });

            Swal.fire({
                title: "Booking Submitted Successfully!",
                text: `Your User ID is: ${newCustomer.id}`,
                icon: "success",
                confirmButtonText: "OK"
            });
        } catch (error) {
            console.error('Request failed:', error);
            alert('Error submitting the form');
        } finally {
            setIsLoading(false);
        }

        onAddCustomer(newCustomer);

        setCustomerName('');
        setMobileNumber('');
        setCheckInDate(new Date());
        setCheckOutDate(new Date());
        setUserType('General');
        setLocation('Dantewada');
        setNumberOfGuests(1);
        // setNumberOfRooms(1);
        setNumberOfDays(1);
    };

    return (
        // <div className="add-booking-container" style={{border:"1px solid blue", margin:"10px", justifyContent:"center"}}>
        <div className="add-booking-container">
            {/* <div style={{
    background: `url(${bookform4})`,
    backgroundSize: "cover"}} /> */}

<div className="add-booking-flex">
                <div className="image-container">
                    <img src="/bookform4.svg" alt="Room Booking" className="booking-image" />
                </div>
            <div className="book-room-form" style={{display:"flex", flexDirection: "column", justifyContent:"center",alignItems:"center", marginTop:"0px"}}>
                <h2 className='add-booking-title'>Plan Your HomeStay With Us</h2>
                <form className="add-booking-form" onSubmit={checkAvailabilityAndSubmit}>
                    <table className="add-booking-table">
                        <tbody>
                            {/* Form fields here, similar to your original form */}
                            <tr>
                                <td><label htmlFor="customerName" className="add-booking-label">Customer Name:</label></td>
                                <td><input type="text" id="customerName" value={customerName} onChange={handleNameChange} minLength={3} required className="add-booking-input" style={{hover:"blue"}} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="phoneNumber" className="add-booking-label">Phone Number:</label></td>
                                <td><input type="tel" id="phoneNumber" value={mobileNumber} onChange={handlePhoneNumberChange} minLength={10} required className="add-booking-input" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="checkIn" className="add-booking-label">Check-In Date:</label></td>
                                <td>
                                    <DatePicker
                                        selected={checkInDate}
                                        onChange={(date) => setCheckInDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        className="add-booking-input"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="checkOut" className="add-booking-label">Check-Out Date:</label></td>
                                <td>
                                    <DatePicker
                                        selected={checkOutDate}
                                        onChange={(date) => setCheckOutDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        className="add-booking-input"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label className="add-booking-label">Number of Days:</label></td>
                                <td><input type="number" value={numberOfDays} readOnly className="add-booking-input" /></td>
                            </tr>
                            <tr>
                                <td><label className="add-booking-label">Number of Guests:</label></td>
                                <td><input type="number" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} required className="add-booking-input" min="1" /></td>
                            </tr>
                            {/* <tr>
                                <td><label className="add-booking-label">Number of Rooms:</label></td>
                                <td><input type="number" value={numberOfRooms} onChange={(e) => setNumberOfRooms(e.target.value)} required className="add-booking-input" min="1" /></td>
                            </tr> */}
                            <tr>
                                <td><label className="add-booking-label">Location:</label></td>
                                <td>
                                    <select value={location} onChange={(e) => setLocation(e.target.value)} className="add-booking-input">
                                        <option value="Dantewada">Dantewada</option>
                                        <option value="Kirandul">Kirandul</option>
                                        <option value="Geedam">Geedam</option>
                                        <option value="Barsur">Barsur</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label className="add-booking-label">User Room Type:</label></td>
                                <td>
                                    <select value={userType} onChange={(e) => setUserType(e.target.value)} className="add-booking-input" style={{left:"50px"}} >
                                        <option value="General">General</option>
                                        <option value="Special">Special</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button type="submit" disabled={isLoading} className="add-booking-submit-btn add-booking-button">
                                        {isLoading ? 'Loading...' : 'Book Now'}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingForm;
