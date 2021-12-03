import React from "react";
import "../Styles/AdminPage.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
export default function AdminPage() {
  const [studentData, setStudentData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };
  const handleSave = async (e) => {
    e.preventDefault();
    //console.log(studentData);

    let res = await axios.post("http://localhost:6677/students", studentData);

    console.log(res);

    setStudentData({});
  };
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
            <Form.Control
              type="text"
              name="name"
              value={studentData.name ? studentData.name : ""}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter name"
            />
          </Form.Group>
          <div className="middle-div">
            <Form.Group className="mb-2">
              <Form.Label>Enter Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={studentData.age ? studentData.age : ""}
                onChange={(e) => handleInputChange(e)}
                placeholder="Enter age"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Enter Qualification</Form.Label>
              <Form.Control
                type="text"
                name="education"
                value={studentData.education ? studentData.education : ""}
                onChange={(e) => handleInputChange(e)}
                placeholder="Enter Qualification"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Enter Gender</Form.Label>
              <Form.Control
                name="gender"
                value={studentData.gender ? studentData.gender : ""}
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="Enter Gender"
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={studentData.city ? studentData.city : ""}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter City"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Contact Number</Form.Label>
            <Form.Control
              type="number"
              name="contact"
              value={studentData.contact ? studentData.contact : ""}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter Contact Number"
            />
          </Form.Group>

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
