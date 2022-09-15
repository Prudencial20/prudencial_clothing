import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SubmissionForm from "./sumbissionForm";
// import { Link } from 'react-router-dom'; 
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';
import Logo from './Images/Logo.png'
import Image from 'react-bootstrap/Image'; 
// import Image from 'react-bootstrap/Image'; 
import facebook from './Images/facebuk.jpg'
import twitter from './Images/twitter.jpg'
import instagram from './Images/instagram1.jpg'
// import instagram from './Images/instagram1.jpg'



const FooterComponent = () => {
    return ( 
        <div>
            <footer className="footer" >
            <Row className='container-fluid mt-5 mb-5'>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          <Image src={Logo} className='navHead' width="200px"/>
                          <h5 className="footer-text">We sell the best</h5>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          {/* <Link to={'/about'}> */}
                          <Nav.Link href="/about">
                          <h3 className="text-light">
                            About us
                          </h3>
                          </Nav.Link>
                          {/* </Link> */}
                          <p className="text-light">
                            We sell Beutiful Clothings for everyone including Children, Men and Ladies at good and Reasonable amounts ffordable to everyone.
                          </p>
                          {/* <Image src={whatsapp} className='navHead' width="250px"/> */}
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                           <h3 className="text-light">
                             Contact Us
                           </h3>
                          <p className="text-light">
                            We can be reached on both whatsapp and facebook. <br />
                            you can also follow our instagram page.
                          </p>

                          <div><Button variant='outline'><Image src={facebook} className='facebook-icons' /></Button>
                        <Button variant='outline'><Image src={twitter} className='facebook-icons' /></Button>
                        <Button variant='outline'><Image src={instagram} className='facebook-icons' /></Button>
                        </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          <h3 className="text-light">
                            Suggestions
                          </h3>
                          <SubmissionForm />
                        </div>
                    </Col>
            </Row>
        </footer>
        </div>
     );
}
 
export default FooterComponent;