// its best code
import React, { useEffect, useState } from 'react';
import "../Components/Allbooking.css";
import Spinner from './Spin'
const AllBooking = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [loadingRowId, setLoadingRowId] = useState(null);
    const [buttonA, setButtonA] = useState(false);
    const [buttonR, setButtonR] = useState(false);

    const API_BASE_URL = 'https://script.google.com/macros/s/AKfycbzGpMzsqrET9EOd-0ijih7XPUoevP8dh9xUerzZjX7oqFbWvplFcr277UM99djZ7J_xWw/exec';

    const fetchCustomers = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}?action=fetch`);
            if (!response.ok) throw new Error('Network response was not ok');
            
            const data = await response.json();
            if (data.rooms) {
                const formattedData = data.rooms;
                setCustomers(formattedData);
                filterCustomers(formattedData, searchQuery, searchDate, selectedLocation);
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

    const filterCustomers = (data, query, date, location) => {

        // const today = new Date().toLocaleDateString();
const today =new Date();
const formattedDate =new Intl.DateTimeFormat('en-GB',{
    day:'2-digit',
    month:'2-digit',
    year:'numeric',
}).format(today)
        let filtered = data;
    //   console.log("this is new day:",formattedDate)
        if (query) {
            const lowerCaseQuery = query.toLowerCase();
            filtered = filtered.filter(customer => 
                (customer["Full Name"] && customer["Full Name"].toLowerCase().includes(lowerCaseQuery)) ||
                (customer["Mo No"] && customer["Mo No"].toString().includes(query)) ||
                (customer["ID"] && customer["ID"].toString().includes(query)) ||
                (customer.Location && customer.Location.toLowerCase().includes(lowerCaseQuery))
            );
        }

        if (date) {
            console.log(filtered)
            filtered = filtered.filter(customer => {
                const checkInDate = new Date(customer["Check In Time"]).toLocaleDateString();
                console.log("this is a Date:",checkInDate)
                return checkInDate === new Date(date).toLocaleDateString();
            });
        } else {
            // Filter by current date if no specific date is provided
            filtered = filtered.filter(customer => {
                // const checkInDate = new Date(customer["Check In Time"]).toLocaleDateString();
                const checkInDate = customer["Check In Time"];
                // const checkInDate = new Date(checkInTime).toLocaleDateString();

                console.log("this is a date",checkInDate)
                return checkInDate === formattedDate;
            });

        }


        if (location) {
            filtered = filtered.filter(customer => customer.Location === location);
        }

        setFilteredCustomers(filtered);
    };

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
        filterCustomers(customers, searchQuery, searchDate, location);
    };

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
        filterCustomers(customers, query, searchDate, selectedLocation);
    };

    const handleSearchDateChange = (date) => {
        setSearchDate(date);
        filterCustomers(customers, searchQuery, date, selectedLocation);
    };


    const updateBookingStatus = async (id, status) => {
        if(status === "Accepted"){
            setButtonA(true);
        } else {
            setButtonR(true);
        }
        setLoadingRowId(id);

        try {
            // const response = await fetch(`${API_BASE_URL}?action=update`, {
                await fetch(`${API_BASE_URL}?action=update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: "no-cors",
                body: JSON.stringify({ id, status })
            });
            await fetchCustomers();
        } catch (error) {
            console.error("Error updating booking status:", error.message);
            setError(`Error updating booking status: ${error.message}`);
        } finally {
            setTimeout(() => {
                setButtonA(false);
                setButtonR(false);
                setLoadingRowId(null);
            }, 200);
        }
    };


    // const updateBookingStatus = async (id, status) => {
    //     if (status === "Accepted") {
    //         setButtonA(true);
    //     } else {
    //         setButtonR(true);
    //     }
    //     setLoadingRowId(id);
    
    //     try {
    //         await fetch(`${API_BASE_URL}?action=update`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             mode: "no-cors",
    //             body: JSON.stringify({ id, status }),
    //         });
    
    //         // Update only the specific customer's status
    //         setCustomers((prevCustomers) =>
    //             prevCustomers.map((customer) =>
    //                 customer.ID === id ? { ...customer, Status: status } : customer
    //             )
    //         );
    
    //         // Update filteredCustomers for consistent UI
    //         setFilteredCustomers((prevFiltered) =>
    //             prevFiltered.map((customer) =>
    //                 customer.ID === id ? { ...customer, Status: status } : customer
    //             )
    //         );
    //     } catch (error) {
    //         console.error("Error updating booking status:", error.message);
    //         setError(`Error updating booking status: ${error.message}`);
    //     } finally {
    //         setTimeout(() => {
    //             setButtonA(false);
    //             setButtonR(false);
    //             setLoadingRowId(null);
    //         }, 200);
    //     }
    // };
    

    // if (loading) return <div>Loading...</div>;
    if (loading) return <Spinner />;
    if (error) return <div>{error}</div>;

    return (
        <div className='booking-list'>
            <h1 className='all-head'>Today's Bookings</h1>

            <div className="filter-section">
                <label htmlFor="location">Filter by Location:</label>
                <select
                    id="location"
                    value={selectedLocation}
                    onChange={(e) => handleLocationChange(e.target.value)}
                >
                    <option value="">All Locations (Current Date)</option>
                    <option value="Dantewada">Dantewada</option>
                    <option value="Geedam">Geedam</option>
                    <option value="Barsoor">Barsoor</option>
                    <option value="Kirandul">Kirandul</option>
                </select>

                <label htmlFor="searchQuery">Search by Name, Mobile, User ID or Location:</label>
                <input
                    type="text"
                    id="searchQuery"
                    value={searchQuery}
                    onChange={(e) => handleSearchQueryChange(e.target.value)}
                    placeholder="Enter Name, Mobile, User ID, or Location"
                />

                <label htmlFor="searchDate">Search by Date:</label>
                <input
                    type="date"
                    id="searchDate"
                    value={searchDate}
                    onChange={(e) => handleSearchDateChange(e.target.value)}
                />
            </div>

            <table className='booking-table'>
                <thead className='Allbooking-table-header'>
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
                        {/* <th>Aadhar/Pan</th> */}
                        {/* <th>No of Rooms</th> */}
                        <th>Total Guests</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCustomers.map((customer) => (
                        <tr key={customer["ID"]}>
                            <td>{customer["ID"]}</td>
                            {/* <td>{new Date(customer["Check In Time"]).toLocaleDateString()}</td> */}
                            {/* <td>{new Date(customer['Check Out Time']).toLocaleDateString()}</td> */}
                            <td>{customer["Check In Time"]}</td>
                            <td>{customer["Check Out Time"]}</td>
                            <td>{customer["Total Days"]}</td>
                            <td>{customer["Full Name"]}</td>
                            <td>{customer["email"]}</td>
                            <td>{customer["Mo No"]}</td>
                            <td>{customer["Location"]}</td>
                            <td>{customer["Customer Type"]}</td>
                            {/* <td>{customer["Aadhar-Pan/link"]}</td> */}
                            {/* <td>{customer["No Off Room"]}</td> */}
                            <td>{customer["Total Guest"]}</td>
                            <td>
                                {loadingRowId === customer["ID"] ? (
                                    <span>Processing...</span>
                                ) : customer.Status === 'Accepted' ? (
                                    <span style={{ color: 'green' }}>Booked</span>
                                ) : customer.Status === 'Rejected' ? (
                                    <span>❌</span>
                                ) : (
                                    <span>Pending</span>
                                )}
                            </td>
                            <td>
                                <button 
                                    onClick={() => updateBookingStatus(customer["ID"], 'Accepted')}
                                    disabled={buttonA && loadingRowId === customer["ID"]}
                                >
                                    {buttonA && loadingRowId === customer["ID"] ? "Accept" : "Accept"}
                                </button>
                                <button 
                                    onClick={() => updateBookingStatus(customer["ID"], 'Rejected')}
                                    disabled={buttonR && loadingRowId === customer["ID"]}
                                >
                                    {buttonR && loadingRowId === customer["ID"] ? "Reject" : "Reject"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllBooking;