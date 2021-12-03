import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [state, setstate] = useState(true);
  const openform = () => {
    setstate(false);
  };
  return state ? (
    <>
      <div className="navbar">
        <Button variant="primary" className="fgh" onClick={openform}>
          Login
        </Button>{" "}
      </div>
    </>
  ) : (
    <div>
      <div className="main-div">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Link to="/admin">
            <Button
              className="buttonvarient"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}
