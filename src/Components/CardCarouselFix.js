import React, { useState, useEffect } from "react";
import olddhramshala from "../Assets/dharamshala.jpg"
import madhuban from "../Assets/madhubanHotel.jpg"
import AmbarLodge from "../Assets/AmberLodge.jpg"
import Barsoor from "../Assets/ShubamHomeStay.png"
import Card from "./Card"


const ResponsiveComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1368);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="d-flex justify-content-around flex-wrap">
          <Card picture={Barsoor} title="Subham Home Stay" description="A cozy retreat in the hills." />
          <Card picture={olddhramshala} title="Dharmshala" description="Danteshwari Dharmshala is located in Dantewada, Chhattisgarh." />
          <Card picture={madhuban} title="Madhuban Hotel" description="A serene getaway in the woods." />
          
          <Card picture={AmbarLodge} title="Ambar Lodge" description="A beachside paradise." />
          <Card picture={Barsoor} title="Subham Home Stay" description="A cozy retreat in the hills." />
          <Card picture={olddhramshala} title="Dharmshala" description="Danteshwari Dharmshala is located in Dantewada, Chhattisgarh." />
          <Card picture={madhuban} title="Madhuban Hotel" description="A serene getaway in the woods." />
          
          <Card picture={AmbarLodge} title="Ambar Lodge" description="A beachside paradise." />
          <Card picture={Barsoor} title="Subham Home Stay" description="A cozy retreat in the hills." />
          <Card picture={olddhramshala} title="Dharmshala" description="Danteshwari Dharmshala is located in Dantewada, Chhattisgarh." />
          <Card picture={madhuban} title="Madhuban Hotel" description="A serene getaway in the woods." />
          <Card picture={AmbarLodge} title="Ambar Lodge" description="A beachside paradise." />
        </div>
      ) : (
        <div>
          <section>
            {/* Top Homestays Section */}
            <div className="row align-items-center">
              {/* Previous Button */}
              <div className="col-auto">
                <button
                  className="btn btn-outline-secondary mx-3"
                  type="button"
                  data-bs-target="#topHomestaysCarousel"
                  data-bs-slide="prev"
                >
                  &#10092;
                </button>
              </div>

              {/* Carousel */}
              <div className="col">
                <div id="topHomestaysCarousel" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-evenly">
                        <Card picture={Barsoor} title="Subham Home Stay" description="A cozy retreat in the hills." />
                        <Card picture={olddhramshala} title="Dharmshala" description="Danteshwari Dharmshala is located in Dantewada, Chhattisgarh." />
                        <Card picture={madhuban} title="Madhuban Hotel" description="A serene getaway in the woods." />
                        <Card picture={AmbarLodge} title="Ambar Lodge" description="A beachside paradise." />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-flex justify-content-evenly">
                        <Card picture={Barsoor} title="Subham Home Stay" description="A cozy retreat in the hills." />
                        <Card picture={olddhramshala} title="Dharmshala" description="Danteshwari Dharmshala is located in Dantewada, Chhattisgarh." />
                        <Card picture={madhuban} title="Madhuban Hotel" description="A serene getaway in the woods." />
                        <Card picture={AmbarLodge} title="Ambar Lodge" description="A beachside paradise." />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-flex justify-content-evenly">
                        <Card picture={Barsoor} title="Subham Home Stay" description="A cozy retreat in the hills." />
                        <Card picture={olddhramshala} title="Dharmshala" description="Danteshwari Dharmshala is located in Dantewada, Chhattisgarh." />
                        <Card picture={madhuban} title="Madhuban Hotel" description="A serene getaway in the woods." />
                        <Card picture={AmbarLodge} title="Ambar Lodge" description="A beachside paradise." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <div className="col-auto">
                <button
                  className="btn btn-outline-secondary mx-3"
                  type="button"
                  data-bs-target="#topHomestaysCarousel"
                  data-bs-slide="next"
                >
                  &#10093;
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ResponsiveComponent;
