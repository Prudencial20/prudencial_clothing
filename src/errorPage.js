import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image404 from './Images/404.png';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return ( 
       <Row> 
        <Col className='p-5'>
        <Card>
              <Card.Header as="h5">
                  Page Not Found
              </Card.Header>
              <Card.Body>
                  {/* <Card.Title><small>
                      Are you lost?
                  </small></Card.Title> */}
                  <Card.Text>
                      <h3>404</h3>
                      <img src={Image404} alt="404" className="image-fluid p-3" width={300}/>
                  </Card.Text>
                  <Link to="/">
                  <Button variant='primary'> Go Back Home</Button>
                  </Link>
              </Card.Body>   
          </Card>
          
           
      </Col>
  </Row>
     );
}
 
export default ErrorPage;