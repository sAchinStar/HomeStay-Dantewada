import { Link, useNavigate } from "react-router-dom";

const DetailsPage = ({ id, title, description, picture }) => {
  const navigation = useNavigate();

  const handleLink = () => {
    // Hide the modal using Bootstrap's modal API
    const modalElement = document.getElementById(id);
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide(); // Dismiss the modal
    }

    // Scroll to the top
    window.scrollTo(0, 0);

    // Navigate to the book page
    navigation('/book');
  };

  return (
    <>
      <div
        className="modal fade"
        id={id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby={`${id}-label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`${id}-label`}>{title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              {/* Responsive Image */}
              <img
                className="img-fluid mx-auto d-block"
                style={{ maxWidth: "100%", height: "auto" }}
                src={picture}
                alt="No cover"
              />
              <p>Description: {description}</p>
              <p>Contact: 91+ 9999999999</p>
              <p>Price Rs 1000/-</p>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button onClick={handleLink} type="button" className="btn btn-success">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
