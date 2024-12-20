import { Link } from "react-router-dom";
import room from "../Assets/room.jpg"
import DetailsPage from "./DetailsPage";


function Card() {
    return (
        <>
            <div className="card my-3" style={{ width: 18 + "rem" }}>
                <img src={room} className="card-img-top" alt="No image" />
                <div className="card-body">
                    <h5 className="card-title">Hotel Malabar</h5>
                    <p className="card-text">Description: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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