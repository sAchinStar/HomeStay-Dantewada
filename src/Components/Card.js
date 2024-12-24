// import { Link } from "react-router-dom";
import DetailsPage from "./DetailsPage";


function Card({ picture, title, description }) {
    const uniqueModalId = `modal-${title.replace(/\s+/g, '-').toLowerCase()}`; // Create a unique ID
  
    return (
      <>
        <div className="card my-3" style={{ width: "18rem", height: "24rem" }}>
          <img src={picture} className="card-img-top" alt="No Cover" style={{ width: "18rem", height: "10rem" }} />
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