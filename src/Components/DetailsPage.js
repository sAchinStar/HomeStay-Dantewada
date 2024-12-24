const DetailsPage = ({ id, title, description, picture }) => {
  return (
    <>
      <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${id}-label`} aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`${id}-label`}>{title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <img style={{width:"38rem", height:"18rem"}} src={picture} alt="No cover" />
              <p>Description:{description}</p>
            <p>Price Rs 1000/-</p>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button type="button" className="btn btn-success">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default DetailsPage;
