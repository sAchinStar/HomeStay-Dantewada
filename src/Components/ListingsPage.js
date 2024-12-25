
// import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./ListingsPage.css";

import list1 from "../Assets/list1.jpg";
import list2 from "../Assets/list2.jpg";
import list3 from "../Assets/list3.jpg";
import list4 from "../Assets/list4.jpg";
import list5 from "../Assets/list5.jpg";
import list6 from "../Assets/list6.jpg";
import list7 from "../Assets/list7.jpg";
import list8 from "../Assets/list8.jpg";
import list9 from "../Assets/list9.jpg";
import list10 from "../Assets/list10.jpg";
import list11 from "../Assets/list11.jpg";
import list12 from "../Assets/list12.jpg";
import DetailsPage from "./DetailsPage";

// import { Link } from "react-router-dom";
// import { fetchHomestays } from "../api";

const ListingsPage = () => {
  // const [homestays, setHomestays] = useState([]);

  // useEffect(() => {
  //   fetchHomestays().then(data => setHomestays(data));
  // }, []);

  return (
    <>
      <DetailsPage />
      <div className="container d-flex justify-content-evenly flex-wrap overflow-y-auto ">

        <Card className="one all" picture={list1} title="Hotel Anurag" description="Hotel Anurag, Chacha Chowk Kailash Nagar Dantewada, Dantewada HO, Dantewada - 494449 (Near Bus Stand)" />
        <Card className="two all" picture={list2} title="Hotel Sunrise" description="Hotel Sunrise, Kailash Nagar Road, Ward 14, Katekalyan, Dantewada - 494449 (Behind Old Circuit House, Near Vishal Traders)" />
        <Card className="three all" picture={list5} title="Hotel Ravi Residency" description="Katekalyan, Dantewada - 494449 (Near Pwd Rest House, Kailash Nagar)" />
        <Card className="four all" picture={list4} title="Hotel Gaurav" description="Jagadalpur, Chhattisgarh, Gurdwara Road, Jagdalpur Ho, Jagdalpur - 494001 (Near By Gurudwara)" />
        <Card className="five all" picture={list3} title="Madhuban" description="High School Road, High School Road, Jagdalpur - 494001 (Opposite Hatha Ground)" />
        <Card className="six all" picture={list6} title="Binaka Heritage" description="Dalpat Sagar Ward, Bajrang Nagar, Bajrang Nagar, Jagdalpur - 494001" />
        <Card className="seven all" picture={list7} title="Hotel Aaradhya" description="Keshloor Chowk, Bastar - 494442 (Next to Chacha Dhaba, Near New Medical College)" />
        <Card className="eight all" picture={list8} title="Jai Sheetla Hotel" description="Nh30, Hikmipara, Hikmipara, Jagdalpur - 494001" />
        <Card className="nine all" picture={list9} title="Hotel Anand Niwas" description="Motitalab Para, Old Gurudwara Road, Motitalab Para, Jagdalpur - 494001 (Near Sanjay Market)" />
        <Card className="ten all" picture={list10} title="Ghumar Munda" description="Near Kishan Dairy, Bangapal, Jagdalpur, Chhattisgarh 494223" />
        <Card className="eleven all" picture={list11} title="Hotel Devansh Residency" description="Kasturba Marg, Chandni Chowk, Jagdalpur - 494001 (Near Collectorate)" />
        <Card className="twelve all" picture={list12} title="Rsn Palace" description="Konta, Dantewada - 494114" />
        <Card className="thirteen all" picture={list9} title="Hotel Anand Niwas" description="Motitalab Para, Old Gurudwara Road, Motitalab Para, Jagdalpur - 494001 (Near Sanjay Market)" />
        <Card className="fourteen all" picture={list10} title="Ghumar Munda" description="Near Kishan Dairy, Bangapal, Jagdalpur, Chhattisgarh 494223" />
        <Card className="fifteen all" picture={list11} title="Hotel Devansh Residency" description="Kasturba Marg, Chandni Chowk, Jagdalpur - 494001 (Near Collectorate)" />
        <Card className="sixteen all" picture={list12} title="Rsn Palace" description="Konta, Dantewada - 494114" />

      </div>
    </>
  );
};

export default ListingsPage;