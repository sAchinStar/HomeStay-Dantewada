import img1 from "../Assets/image1.png"
import img2 from "../Assets/image2.png"
import img3 from "../Assets/image3.png"
import photo1 from "../Assets/1.png"
import photo2 from "../Assets/2.png"
import photo3 from "../Assets/3.png"
import photo4 from "../Assets/4.jpg"
import photo5 from "../Assets/5.jpg"
import photo6 from "../Assets/6.jpg"
import photo7 from "../Assets/7.png"
import photo8 from "../Assets/8.jpg"
import photo9 from "../Assets/9.jpg"
import photo10 from "../Assets/10.jpg"
import photo11 from "../Assets/11.jpg"
import photo12 from "../Assets/12.jpg"
import photo13 from "../Assets/13.jpg"
import photo14 from "../Assets/14.jpg"
import photo15 from "../Assets/15.jpg"
import photo16 from "../Assets/16.jpg"
import photo17 from "../Assets/17.jpg"
function ImageSlider() {

    return (
        // <div style={{ height: 10 + "px" }}>
        // <div>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner" style={{height:28 +"rem"}}>
                    <div className="carousel-item active" >
                        <img src={img1} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo1} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo2} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo3} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo4} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo5} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo6} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo7} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo8} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo9} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo10} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo11} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo12} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo13} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo14} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo15} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo16} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={photo17} className="d-block w-100" alt="..." style={{height:28 +"rem"}} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        // </div>
    )
};

export default ImageSlider;