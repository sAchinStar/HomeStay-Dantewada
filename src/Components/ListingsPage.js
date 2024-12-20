import React, { useEffect, useState } from "react";
import { fetchHomestays } from "../api";

const ListingsPage = () => {
  const [homestays, setHomestays] = useState([]);

  useEffect(() => {
    fetchHomestays().then(data => setHomestays(data));
  }, []);

  return (
    <div>
      <h1>Homestays</h1>
      <div>
        {homestays.map((homestay) => (
          <div key={homestay.id}>
            <img src={homestay.image} alt={homestay.name} />
            <h3>{homestay.name}</h3>
            <p>{homestay.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;
