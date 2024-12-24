// import { Link } from "react-router-dom";
import DetailsPage from "./DetailsPage";
import "./Card.css"


function Card({ className,picture, title, description }) {
    const uniqueModalId = `modal-${title.replace(/\s+/g, '-').toLowerCase()}`; // Create a unique ID

     // Function to check if the text is in the viewport
     function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (rect.top >= 0 && rect.bottom <= window.innerHeight);
    }

    // Check each text element on scroll
    window.addEventListener('scroll', function() {
      const texts = document.querySelectorAll('.scroll-text');
      texts.forEach(text => {
        if (isInViewport(text)) {
          text.classList.add('visible');
        } else {
          text.classList.remove('visible');
        }
      });
    });
  
    return (
      <>
        <div className={`card my-3 ${className} myCard`} style={{ width: "18rem", height: "24rem" }}>
          <img src={picture} className="card-img-top myCard" alt="No Cover" style={{ width: "18rem", height: "10rem" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description.length >= 100 ? description.slice(0, 100) + "..." : description}</p>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${uniqueModalId}`}>
              View Details
            </button>
          </div>
        </div>
        <DetailsPage id={uniqueModalId} title={title} description={description} picture={picture} />
      </>
    );
  }
  
export default Card;