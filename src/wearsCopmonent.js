import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import children4 from './Images/fineboy.jpg'
// import api from './api';

const WearsComponent = ({ posts }) => {
    // const history = useHistory()
    
         
    return (
        <div>

            <Row>
               
                        {
                            posts.map(
                              (posts)  => (

                              
                
                <Col xs={12} md={4} lg={3} key={posts.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={children4} />
                    <Card.Body>
                        <Card.Title>{posts.items}</Card.Title>
                        {posts.amount}
                        <Card.Text>
                            {posts.body}
                        </Card.Text>
                        {/* <Link to={`/posts/${post.id}`}>
                        <Button variant="primary">Read more</Button>
                        </Link>
                        <Button variant="danger" onClick={()=>deletePost(post.id)}>Delete Post</Button> */}
                    </Card.Body>
                </Card>
                </Col>

)
                            )
                        }



            </Row>

        </div>
    );
}

export default WearsComponent;