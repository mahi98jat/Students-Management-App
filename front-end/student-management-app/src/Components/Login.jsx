import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [state, setstate] = useState(true);
  const [loginData, setLoginData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleClick = async () => {
    await axios
      .post("http://localhost:6677/login", loginData)
      .then((res) => {
        console.log(res);
      });
  };
  const openform = () => {
    setstate(false);
  };
  return state ? (
    <>
      <div className="navbar">
        <Button variant="primary" className="fgh" onClick={openform}>
          Log In
        </Button>{" "}
      </div>
    </>
  ) : (
    <div>
      <div className="main-div">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <select
            class="form-select"
            aria-label="Default select example"
            name="role"
            onChange={(e) => handleChange(e)}
          >
            <option selected>Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {/* <Link to="/admin"> */}
          <Button
            className="buttonvarient"
            variant="primary"
            onClick={handleClick}
          >
            Login
          </Button>
          {/* </Link> */}
        </Form>
      </div>
    </div>
  );
}
