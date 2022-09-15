import  Carousel  from "react-bootstrap/Carousel";
import Kids1 from './Images/Kids1.jpg';
import children4 from './Images/children4.webp';
import children5 from './Images/children5.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 
// import Man3  from './Images/Man3.jpg';
// import Picture2  from './Images/Picture2.jpg'



const CarouselComponent = () => {
    return (
        <div>
            <Carousel className="sliderHeight">
                <Carousel.Item className="sliderHeight">
                    <img
                        className="d-block w-100"
                        src={Kids1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-words">
                        <h3 className="sliderText">We Sell The Best, You Shop Them</h3>
                        <p className="sliderText">Beautiful Clothings for Cheaper Amount.</p>
                        <Link to="/shop">
                        <Button variant="dark" type="submit">
                            Shop now
                        </Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="sliderHeight">
                    <img
                        className="d-block w-100"
                        src={children4}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carousel-words">
                    <h3 className="sliderText">We Sell The Best, You Shop Them</h3>
                        <p className="sliderText">Beautiful Clothings for Cheaper Amount.</p>
                        <Link to="/shop">
                        <Button variant="dark" type="submit">
                            Shop Now
                        </Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="sliderHeight">
                    <img
                        className="d-block w-100"
                        src={children5}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="carousel-words">
                    <h3 className="sliderText">We Sell The Best, You Shop Them</h3>
                        <p className="sliderText">Beautiful Clothings for Cheaper Amount.</p>
                        <Link to="/shop">
                        <Button variant="dark" type="submit">
                            Shop Now
                        </Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}


export default CarouselComponent;