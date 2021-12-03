import React from "react";
import axios from 'axios'
import "../Styles/Contestdata.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

export default function ContestFill() {
  const [contestData, setContestData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContestData({ ...contestData, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(contestData)
    let res = await axios.post("http://localhost:6677/contest", contestData);

    console.log(res);
    setContestData({});
  };
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
      <div className="Studentform">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={contestData.title ? contestData.title : ""}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter Title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Topic</Form.Label>
            <Form.Control
              type="text"
              name="topic"
              value={contestData.topic ? contestData.topic : ""}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter Topic"
            />
          </Form.Group>
          <div className="middle-div">
            <Form.Group className="mb-2">
              <Form.Label>Enter Start Date</Form.Label>
              <Form.Control
                type="text"
                name="Start_date"
                value={contestData.Start_date ? contestData.Start_date : ""}
                onChange={(e) => handleInputChange(e)}
                placeholder="Enter Start Date"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Enter End Date</Form.Label>
              <Form.Control
                name="End_date"
                value={contestData.End_date ? contestData.End_date : ""}
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="Enter Date"
              />
            </Form.Group>
          </div>

          <Button
            className="buttonvarient"
            variant="primary"
            type="submit"
            onClick={(e) => handleSave(e)}
          >
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
}
