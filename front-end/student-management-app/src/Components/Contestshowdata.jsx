import React from "react";
import axios from "axios";
import "../Styles/Contestdata.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

export default function Contestshowdata() {
  const [loading, setLoading] = useState(true);
  const [contestDetails, setConstestDetails] = useState([]);
  const getData = async () => {
    let res = await axios.get("http://localhost:6677/contest");
    console.log(res);
    let { data } = res;
    setConstestDetails(data);
    setLoading(false);
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
        ) : (
          contestDetails.map((e) => (
            <div>
              <h1>{e.title}</h1>
              <h4>{e.topic}</h4>
              <p>{e.Start_date}</p>
              <p>{e.End_date}</p>
              <Button variant="primary">Remove Contest</Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
