import React from "react";
import axios from "axios";
import "../Styles/Contestdata.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
export default function Studentdata() {
  const [loading, setLoading] = useState(true);
  const [studentDetails, setStudentDetails] = useState([]);
  const getData = async () => {
    let res = await axios.get("http://localhost:6677/students");
    console.log(res);
    let { data } = res;
    setStudentDetails(data);
    setLoading(false);
  };
  const removeStudent = async (id) => {
    await axios.delete(`http://localhost:6677/students/delete/${id}`);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
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
        {loading ? (
          <h3>We are fetching the details</h3>
        ) : studentDetails.length === 0 ? (
          <h1>
            students have to add. There is no data present in database for
            students.
          </h1>
        ) : (
          studentDetails.map((e) => (
            <div>
              <h1>{e.name}</h1>
              <h4>{e.education}</h4>
              <p>{e.age}</p>
              <p>{e.gender}</p>
              <p>{e.city}</p>
              <p>{e.contact}</p>
              <Button variant="primary" onClick={() => removeStudent(e._id)}>
                Remove Student
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
