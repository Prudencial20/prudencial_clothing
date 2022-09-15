import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import api from './api';

import FooterComponent from './footerComponent';

const SignIn = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState('true');
    const history = useHistory();

        const SignInDetails = {username,email, password}

        const handleSubmit = (e) => {
            e.preventDefault();
            // setIsPending(false)
            const register = async () => {
                try {
                   const response = await api.post('/customers', SignInDetails)
                   history.push('/') 
                } catch (error) {
                    console.log(error.response.data)
                }
            }
            register();
            
        

        // sessionStorage.setItem('RegisterDetails', JSON.stringify(RegisterDetails));

    }
    // const showData = () =>{
    //     let rawdata = sessionStorage.getItem('loginDetails');
    //     let data = JSON.parse(rawdata)
    //     console.log(data.password);
    // }


    return ( 
        <div className='signin'>
            <Row >
             <Col md={{span: 6, offset:3, sm: 12}}>  
             <h1>Your Firtst Time? Sign Up With Us Here</h1>
             <Card style={{ width: 'auto', margin: '10px', padding: '20px'}}> 
             <Card.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)} ></Form.Control> 
                    <Form.Text className="text-muted">
                        Please enter your username 
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} ></Form.Control> 
                    <Form.Text className="text-muted">
                        Please enter your email
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                </Form.Group>
                {isPending &&
                <Button variant="primary" type="submit">
                    Submit
                </Button> }
                { !isPending &&
                <Button variant="primary" type="submit" disabled>
                    Submitting the Blog <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />
                </Button> }
            </Form>
            </Card.Body>
            </Card>   

            </Col>
            </Row>

           <FooterComponent /> 
        </div>      
     );
}
 
export default SignIn;