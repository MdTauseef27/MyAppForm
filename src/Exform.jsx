import React from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
export const Exform = () => {
  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formBasicname">
            <Form.Label>
              <b>First Name</b>
            </Form.Label>
            <Form.Control type="text" placeholder="First Name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicname">
            <Form.Label>
              <b>Last Name</b>
            </Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formBasiccity">
          <Form.Label>
            <b>city</b>
          </Form.Label>
          <Form.Control as="select" placeholder="Select">
            <option>Maharashtra</option>
            <option>Andhra Pardesh</option>
            <option>Telangana</option>
            <option>Kerela</option>
            <option>Rajisthan</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <b>Email Address</b>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <b>Password</b>
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
