import React from "react";
import "../Styles/AdminPage.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
export default function AdminPage() {
  return (
    <div>
      <div className="navbar">
        <Button variant="primary">Student Details</Button>
        <Button variant="primary">Contest Details</Button>
        <Button variant="primary">View Contest</Button>
      </div>
      <div className="Studentform">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <div className="middle-div">
            <Form.Group className="mb-2">
              <Form.Label>Enter Age</Form.Label>
              <Form.Control type="number" placeholder="Enter age" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Enter Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Qualification"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Enter Gender</Form.Label>
              <Form.Control type="text" placeholder="Enter Gender" />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Contact Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Contact Number"
            />
          </Form.Group>

          <Button
            className="buttonvarient"
            variant="primary"
            type="submit"
          >
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
}
