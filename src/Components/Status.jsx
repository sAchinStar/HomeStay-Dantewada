
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import "./Allbooking.css";
import './Status.css';
// import qrCodeImage from '../assets/SampleQR.png';
import qrCodeImage from '../Assets/PhonePeQR.png';

const Status = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearched, setIsSearched] = useState(false);

    const API_BASE_URL = 'https://script.google.com/macros/s/AKfycbzGpMzsqrET9EOd-0ijih7XPUoevP8dh9xUerzZjX7oqFbWvplFcr277UM99djZ7J_xWw/exec';

    const fetchCustomers = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}?action=fetch`);
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            if (data.rooms) {
                setCustomers(data.rooms);
                setFilteredCustomers([]);
            } else {
                throw new Error("Data format is incorrect: 'rooms' property not found");
            }
        } catch (error) {
            setError('Error fetching data: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
    };

    const handleSearchClick = () => {
        setIsSearched(true);
        if (searchQuery.trim()) {
            filterCustomers(customers, searchQuery);
        } else {
            setFilteredCustomers([]);
        }
    };

    const filterCustomers = (data, query) => {
        if (query) {
            const filtered = data.filter(customer =>
                customer["ID"] && customer["ID"].toString() === query.trim()
            );
            setFilteredCustomers(filtered);
            if (filtered.length === 0) {
                Swal.fire({
                    title: 'No results found',
                    text: `No booking found with ID ${searchQuery}`,
                    icon: 'info',
                    confirmButtonText: 'Close',
                });
            }
        } else {
            setFilteredCustomers([]);
        }
    };

    const openQRCodeModal = () => {
        const screenWidth = window.innerWidth;

        Swal.fire({
            title: 'QR Code',
            imageUrl: qrCodeImage,
            imageAlt: 'QR Code Image',
            width: screenWidth > 768 ? '30%' : '70%',
            padding: screenWidth > 768 ? '20px' : '10px',
            background: '#fff',
            showCloseButton: true,
            confirmButtonText: 'Close',
            confirmButtonColor: '#3085d6',
            customClass: {
                popup: 'responsive-swal-popup',
            },
        });
    };

    // Loading spinner display
    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        );
    }

    if (error) return <div>{error}</div>;

    return (
        <div className='booking-list'>
            <h1 className='all-head' style={{display:"flex", justifyContent:"center"}}>Check your Bookings (Status)</h1>
            {/* <p>Note: when is your booking status booked show then you pay money </p> */}

            <div className="filter-section">
                <label htmlFor="searchQuery">Search by User ID:</label>
                <input
                    type="text"
                    id="searchQuery"
                    value={searchQuery}
                    onChange={(e) => handleSearchQueryChange(e.target.value)}
                    placeholder="Enter User ID"
                />
                <button onClick={handleSearchClick}>Search</button>
            </div>
            <br />

            <table className='booking-table'>
                <thead className='Allbooking-table-header' >
                    <tr>
                        <th>User ID</th>
                        <th>Check-In Date</th>
                        <th>Check-Out Date</th>
                        <th>Total Days</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Location</th>
                        <th>Customer Type</th>
                        {/* <th>No of Rooms</th> */}
                        <th>Total Guests</th>
                        <th>Status</th>
                        <th>QR Code</th>
                    </tr>
                </thead>
                <tbody>
                    {isSearched && filteredCustomers.length === 0 ? (
                        <tr>
                            <td colSpan="12">No results found.</td>
                        </tr>
                    ) : (
                        filteredCustomers.map((customer) => (
                            <tr key={customer["ID"]}>
                                <td>{customer["ID"]}</td>
                                {/* <td>{new Date(customer["Check In Time"]).toLocaleDateString()}</td> */}
                                <td>{customer["Check In Time"]}</td>
                                {/* <td>{new Date(customer['Check Out Time']).toLocaleDateString()}</td> */}
                                <td>{customer['Check Out Time']}</td>
                                <td>{customer["Total Days"]}</td>
                                <td>{customer["Full Name"]}</td>
                                <td>{customer["email"]}</td>
                                <td>{customer["Mo No"]}</td>
                                <td>{customer["Location"]}</td>
                                <td>{customer["Customer Type"]}</td>
                                {/* <td>{customer["No Off Room"]}</td> */}
                                <td>{customer["Total Guest"]}</td>
                                <td>
                                    {customer.Status === 'Accepted' ? (
                                        <span style={{ color: 'green' }}>Booked</span>
                                    ) : customer.Status === 'Rejected' ? (
                                        <span>❌</span>
                                    ) : (
                                        <span>Pending</span>
                                    )}
                                </td>
                                <td>
                                    {customer.Status === 'Accepted' ? (
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                openQRCodeModal();
                                            }}
                                        >
                                            View QR Code
                                        </a>
                                    ) : (
                                        <span>Not Available</span>
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <div className="image-container">
                    <img src="/status.svg" alt="Room Booking" className="booking-image" />
                </div>
        </div>
    );
};

export default Status;


