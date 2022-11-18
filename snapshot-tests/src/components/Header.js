import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Header() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>GitHub Name</Form.Label>
        <Form.Control type="email" placeholder="Enter GitHub Name" style={{'max-width': '24rem', 'margin': '0 auto'}} />
        <Form.Text className="text-muted">
          We'll never share your github name with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Header;