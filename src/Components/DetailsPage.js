// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchHomestays } from "../api";

const DetailsPage = () => {
  // const { id } = useParams(); // Get the homestay ID from the route
  // const [homestay, setHomestay] = useState(null);

  // useEffect(() => {
  //   fetchHomestays().then((data) => {
  //     const selectedHomestay = data.find((item) => item.id === id);
  //     setHomestay(selectedHomestay);
  //   });
  // }, [id]);

  // if (!homestay) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>

{/* // <!--Modal --> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer d-flex justify-content-center">
              {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button type="button" className="btn btn-success">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
