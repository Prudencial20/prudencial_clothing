import Button from 'react-bootstrap/Button';
// import CarouselComponent from "./carouselComponent";
import cnn from './Images/cnn.png'
import business from './Images/businessday.png'
import british from './Images/british.png'
import pulse from './Images/pulse.png'
// import { Link } from 'react-router-dom'; 
import Nav from 'react-bootstrap/Nav';
import FooterComponent from './footerComponent';


const About = () => {
    return (  
        <div>
            {/* <CarouselComponent /> */}


            <h2 className="about-texts">
                Prudence Clothing is a new Clothing Shopping Site for Everyone. <br /> 
                Including Kids, Men and Women. 
                {/* <br /> Clothings here are very affordable */}
            </h2>
                <br />
                <br />
            
            <div>
            <h3>
                 We are Feautured On 
            </h3>
        
        </div>
        <div className='about-images'>
        <img
                        
                        src={cnn}
                        alt="First slide" width="100px"
                    /> 
        <img
                        
                        src={business}
                        alt="First slide" width="150px"
                    /> 
        <img
                        
                        src={british}
                        alt="First slide" width="100px"
                    /> 
        <img
                        
                        src={pulse}
                        alt="First slide" width="100px"
                    /> 
        </div>
        <br />
        <br />
        
             {/* <CarouselComponent /> */}
             <Nav.Link href="/">
            <Button variant="success" type="submit" >
                            Go Back Home
            </Button>
            </Nav.Link>

            <FooterComponent />
        </div>
    );
}
 
export default About;