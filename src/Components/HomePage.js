import React,{useEffect} from "react";
import ImageSlider from "./ImageSlider";
import Card from "./Card";
import Barsoor from "../Assets/ShubamHomeStay.png"
import samloor from "../Assets/samloorAct.png"
import bacheli from "../Assets/BacheliAct.png"
import barsurAct from "../Assets/barsurAct.png"
import fulpadAct from "../Assets/fulpadAct.png"
import dholkalAct from "../Assets/dholkalAct.png"
import dantewadaAct from "../Assets/dantewadaAct.png"
import olddhramshala from "../Assets/dharamshala.jpg"
import madhuban from "../Assets/madhubanHotel.jpg"
import AmbarLodge from "../Assets/AmberLodge.jpg"
import Typed from "typed.js"


const HomePage = () => {
  
  
      useEffect(() => {
        const typedWelcome = new Typed('#typed-welcome', {
          strings: ['Welcome to Dantewada'],
          typeSpeed: 90,
          showCursor: false,
          onComplete: () => {
            // After completing the first string, start the second
            const typedDiscover = new Typed('#typed-discover', {
              strings: ['Discover homestays and exciting activities!'],
              typeSpeed: 90,
              backSpeed:25,
              loop:true,
            });
          },
        });
    
        return () => {
          typedWelcome.destroy();
        };
      }, []);
  return (


  <div>
    <header className="container text-center">
    {/* <h3> <span id="typed-element" className="comfort-comment" style={{ whiteSpace: 'pre-line' }}></span> </h3> */}
    <div>
    <h1 className="my-3"><span id="typed-welcome"></span> </h1>
    <p style={{ fontSize: '20px', marginTop: '10px' }}>
    <span id="typed-discover" >  </span>
    </p>
    </div>
    </header>
      <ImageSlider />
    <section className="my-5">
    <h2>Top Homestays</h2>
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


      <h2 className="text-center mb-4">Featured Activities</h2>
    <section className="container my-5 ml-5">
      {/* Featured Activities Section */}
      <div className="row">
        <div className="col-md-4">
          <Card picture={samloor} title="Samlur Shiva Temple" description="Samlur is located around 9 KMs from District HQ Dantewada, here lies an ancient Shiva Temple almost intact and is being regularly worshiped by the disciples." />
        </div>
        <div className="col-md-4">
          <Card picture={bacheli} title="Bacheli" description="Located 28 KMs from District HQ Dantewada, Bacheli is famous for finest Iron ore of the country. NMDC is doing the mining activity in Bacheli and Kirandul towns on Bailadila ranges. " />
        </div>
        <div className="col-md-4">
          <Card picture={barsurAct} title="Barsur – An Archaeological Treasure" description="Once the Capital of Nagavansh Raja Banasur, Barsur is a fond destination for one who love history and ancient sculptures. This tiny town is filled with archaeological treasures." />
        </div>
        <div className="col-md-4">
          <Card picture={fulpadAct} title="Fulpad Waterfalls" description="Located amidst lush green hilly area Fulpad is an adventure spot for one who love trekking and nature alike" />
        </div>
        <div className="col-md-4">
          <Card picture={dholkalAct} title="Dholkal Ganesh" description="Dholkal Ganesh is a beautiful spot located 3000 feet high in the Bailadila Mountain ranges in District Dantewada.  A 3 Feet beautiful stone idol of Lord Ganesha believed to be made during the Naga dynasty between 10th and 11th centuries is the main attraction of the site. Located 13 KMs from the district HQ Dantewada, this spot is the heaven for nature lovers, and for those who love to trek amidst lush green hillocks. " />
        </div>
        <div className="col-md-4">
          <Card picture={dantewadaAct} title="Dantewada" description="Temple dedicated to the most revered Goddess of Bastar Ma Danteshwari, believed to be one among the 52 Shakti Pithas. Teeth of Sati Devi is believed to have fallen here, hence the name Dantewada derived." />
        </div>
      </div>
    </section>

  </div>
);
};

export default HomePage;
