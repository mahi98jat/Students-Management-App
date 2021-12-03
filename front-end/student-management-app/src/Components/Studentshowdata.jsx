import React from "react";
import "../Styles/Contestdata.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
export default function Studentdata() {
  return (
    <div>
      <div className="navbar">
        <Link to="/admin">
          <Button variant="primary">Student Details</Button>
        </Link>
        <Link to="/contest">
          <Button variant="primary">Contest Details</Button>
        </Link>
        <Link to="/othercontest">
          <Button variant="primary">View Contest Details</Button>
        </Link>
        <Link to="/otherstudent">
          <Button variant="primary">View Student Details</Button>
        </Link>
      </div>

      <div className="details-div">
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </div>
  );
}
