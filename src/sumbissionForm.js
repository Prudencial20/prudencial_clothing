import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const SubmissionForm = () => {
    return ( 
        <div>
            <Form>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='text-light'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
     );
}
 
export default SubmissionForm ;