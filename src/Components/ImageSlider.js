import img from "../Assets/room.jpg"
function ImageSlider() {
    
    return (
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={img} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={img} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={img} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
};

export default ImageSlider;