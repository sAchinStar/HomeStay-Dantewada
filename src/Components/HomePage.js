import React from "react";
import ImageSlider from "./ImageSlider";
import Card from "./Card";

const HomePage = () => (
  <div>
    <header>
      <h1>Welcome to Dantewada</h1>
      <p>Discover homestays and exciting activities!</p>
      <ImageSlider />
    </header>
    <h2>Top Homestays</h2>
    <section className="my-5">
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
                  <Card title="Homestay 1" description="A cozy retreat in the hills." />
                  <Card title="Homestay 2" description="A luxurious riverside villa." />
                  <Card title="Homestay 3" description="A serene getaway in the woods." />
                  <Card title="Homestay 4" description="A beachside paradise." />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-evenly">
                  <Card title="Homestay 5" description="A charming farmhouse experience." />
                  <Card title="Homestay 6" description="An eco-friendly mountain cabin." />
                  <Card title="Homestay 7" description="A quaint village homestay." />
                  <Card title="Homestay 8" description="A contemporary urban suite." />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-evenly">
                  <Card title="Homestay 9" description="A charming farmhouse experience." />
                  <Card title="Homestay 10" description="An eco-friendly mountain cabin." />
                  <Card title="Homestay 11" description="A quaint village homestay." />
                  <Card title="Homestay 12" description="A contemporary urban suite." />
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


    <section className="container my-5">
      {/* Featured Activities Section */}
      <h2 className="text-center mb-4">Featured Activities</h2>
      <div className="row">
        <div className="col-md-4">
          <Card title="Trekking Adventure" description="Explore scenic trails with a guide." />
        </div>
        <div className="col-md-4">
          <Card title="Cultural Tour" description="Immerse yourself in local traditions and art." />
        </div>
        <div className="col-md-4">
          <Card title="Yoga Retreat" description="Relax and rejuvenate with daily yoga sessions." />
        </div>
        <div className="col-md-4">
          <Card title="Cooking Workshop" description="Learn to prepare authentic local dishes." />
        </div>
        <div className="col-md-4">
          <Card title="Wildlife Safari" description="Discover exotic animals in their natural habitat." />
        </div>
        <div className="col-md-4">
          <Card title="Water Sports" description="Enjoy activities like kayaking and snorkeling." />
        </div>
      </div>
    </section>

  </div>
);

export default HomePage;
