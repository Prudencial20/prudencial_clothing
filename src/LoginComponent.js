import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import api from './api'
const Login = () => {

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
   
  });
  const history = useHistory();
  const [isPending, setIsPending] = useState(true)
  const handleInput = (e) => {
    e.persist()
    setLoginDetails({
      ...loginDetails, [e.target.name]: e.target.value
    })
  }


  const data = {
    email: loginDetails.email,
    password: loginDetails.password
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = async () => {
      try {
        const response = await api.post('/customers', data)
          .then(res => {
            // //console.log(res.data.validation_errors);
            if (res.data.status === 200) {

              
              history.push('/shop')

            
            
            }
          })
      } catch (error) {
        console.log("Request not Performed", error.message, "error")
      }
    }
    login();

//     try {
//       const response = await api.post('/customers', SignInDetails)
//       history.push('/') 
//    } catch (error) {
//        console.log(error.response.data)
//    }
// }
// register();



  }

  return (
    <Row className='pt-5'>
      <Col md={{ span: 6, offset: 3 }} sm={12} >
        <Card style={{ width: 'auto', margin: '10px', padding: '20px' }}>
        <h1>Sign into your Account and Continue SHOPPING!</h1>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter username" name="email" value={loginDetails.email} onChange={handleInput} />
                <Form.Text className="text-danger"> 
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" name="password" value={loginDetails.password} onChange={handleInput} />
                <Form.Text className="text-danger"> 
                </Form.Text>
              </Form.Group>


              {isPending && <Button variant="primary" type="submit">
                Submit
              </Button>}
              {!isPending && <Button variant="primary" type="submit" disabled>
                Submitting the Blog <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </Button>}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;