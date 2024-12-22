// import { Link } from "react-router-dom";
import DetailsPage from "./DetailsPage";


function Card({picture,title,description}) {
    return (
        <>
            <div className="card my-3" style={{ width: 18 + "rem" }}>
                <img src={picture} className="card-img-top" alt="No Cover" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    {/* <Link to="#" className="btn btn-primary">View Details</Link> */}
                    {/* // < !--Button trigger modal-- > */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        View Details
                    </button>
                </div>
            </div>
            <DetailsPage />
        </>
    )
}

export default Card;