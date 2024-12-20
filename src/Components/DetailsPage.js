import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHomestays } from "../api";

const DetailsPage = () => {
  const { id } = useParams(); // Get the homestay ID from the route
  const [homestay, setHomestay] = useState(null);

  useEffect(() => {
    fetchHomestays().then((data) => {
      const selectedHomestay = data.find((item) => item.id === id);
      setHomestay(selectedHomestay);
    });
  }, [id]);

  if (!homestay) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{homestay.name}</h1>
      <div>
        <img src={homestay.image} alt={homestay.name} />
        <p>{homestay.description}</p>
        <p>Price: ₹{homestay.price}</p>
        <p>Contact: {homestay.contact}</p>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default DetailsPage;
