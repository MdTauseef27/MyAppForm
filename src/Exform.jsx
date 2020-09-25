import React, { useState } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
export const Exform = () => {
  const [FirstName, SetFirstName] = useState("Mohammed");
  const [MessageAlert, SetMessageAlert] = useState("");
  const [LastName, SetLastName] = useState("Salman");
  const [MessageAlert1, SetMessageAlert1] = useState("");

  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formBasicname">
            <Form.Label>
              <b>First Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={FirstName}
              onChange={(e) => SetFirstName(e.target.value)}
              onFocus={() => {
                SetFirstName("");
                SetMessageAlert("");
              }}
              onBlur={() => SetMessageAlert(`Successfully edited ${FirstName}`)}
            />
            <Form.Text className="text-muted"></Form.Text>
            <p>
              <Form.Label>{FirstName}</Form.Label>
            </p>
            <p>
              <Form.Label>{MessageAlert}</Form.Label>
            </p>
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicname">
            <Form.Label>
              <b>Last Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={LastName}
              onChange={(e) => SetLastName(e.target.value)}
              onFocus={(e) => {
                SetLastName("");
              }}
              onBlur={(e) =>
                SetMessageAlert1(`Successfully Edited ${LastName}`)
              }
            />

            <Form.Text className="text-muted"></Form.Text>
            <p>
              <Form.Label>{LastName}</Form.Label>
            </p>
            <p>
              <Form.Label>{MessageAlert1}</Form.Label>
            </p>
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
