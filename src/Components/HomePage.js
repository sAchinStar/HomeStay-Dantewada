import React,{useEffect} from "react";
import ImageSlider from "./ImageSlider";
import Card from "./Card";
import samloor from "../Assets/samloorAct.png"
import bacheli from "../Assets/BacheliAct.png"
import barsurAct from "../Assets/barsurAct.png"
import fulpadAct from "../Assets/fulpadAct.png"
import dholkalAct from "../Assets/dholkalAct.png"
import dantewadaAct from "../Assets/dantewadaAct.png"

import Typed from "typed.js"
import ResponsiveComponent from "./CardCarouselFix";


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


      <h2 className="my-3">Top Homestays</h2>
    <ResponsiveComponent/>
      <h2 className="text-center my-3">Featured Activities</h2>
    <section>
      {/* Featured Activities Section */}
      <div className="d-flex justify-content-around flex-wrap">
        
          <Card picture={samloor} title="Samlur Shiva Temple" description="Samlur is located around 9 KMs from District HQ Dantewada, here lies an ancient Shiva Temple almost intact and is being regularly worshiped by the disciples." />

          <Card picture={bacheli} title="Bacheli" description="Located 28 KMs from District HQ Dantewada, Bacheli is famous for finest Iron ore of the country. NMDC is doing the mining activity in Bacheli and Kirandul towns on Bailadila ranges. " />

          <Card picture={barsurAct} title="Barsur – An Archaeological Treasure" description="Once the Capital of Nagavansh Raja Banasur, Barsur is a fond destination for one who love history and ancient sculptures. This tiny town is filled with archaeological treasures." />

          <Card picture={fulpadAct} title="Fulpad Waterfalls" description="Located amidst lush green hilly area Fulpad is an adventure spot for one who love trekking and nature alike" />

          <Card picture={dholkalAct} title="Dholkal Ganesh" description="Dholkal Ganesh is a beautiful spot located 3000 feet high in the Bailadila Mountain ranges in District Dantewada.  A 3 Feet beautiful stone idol of Lord Ganesha believed to be made during the Naga dynasty between 10th and 11th centuries is the main attraction of the site. Located 13 KMs from the district HQ Dantewada, this spot is the heaven for nature lovers, and for those who love to trek amidst lush green hillocks. " />

          <Card picture={dantewadaAct} title="Dantewada" description="Temple dedicated to the most revered Goddess of Bastar Ma Danteshwari, believed to be one among the 52 Shakti Pithas. Teeth of Sati Devi is believed to have fallen here, hence the name Dantewada derived." />
      </div>
    </section>

  </div>
);
};

export default HomePage;
