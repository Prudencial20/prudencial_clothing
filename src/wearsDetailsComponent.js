import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import AlertComponent from './AlertComponent';
import loader from './logo.svg'
import FooterComponent from './footerComponent';
// import { Link } from 'react-router-dom'; 



const WearsDetailsComponent = () => {
    const {id} = useParams();
    const  {data:post, error, isPending} = useFetch(`http://localhost:4000/posts/${id}`)
    return ( 
        <div>
            <Row>
                <Col className='p-5'>
                  {post &&<Card>
                        <Card.Header as="h2">
                            {post.items}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                {post.amount}
                            </Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                            
                            <Button variant='primary'> Go Somewhere</Button>  
                        </Card.Body>
                    </Card>
                    } 
                     {isPending && <div><img src={loader} width="200" alt="preloader" /></div>}
                    {error && <AlertComponent props={error}/>}
                    <FooterComponent />
                </Col>
            </Row>

        </div>
     );
}
 
export default WearsDetailsComponent;