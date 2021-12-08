import React from "react";
import axios from "axios";
import "../Styles/Contestdata.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Contestshowdata() {
  let location = useLocation();
  var res = location.state.name;
  console.log(res);
  const [loading, setLoading] = useState(true);
  const [contestDetails, setConstestDetails] = useState([]);
  const [dataa, setDate] = useState(res);
  console.log(dataa);

  const getData = async () => {
    let res = await axios.get("http://localhost:6677/contest");
    //console.log(res);
    let { data } = res;
    console.log({ data });
    setConstestDetails(data);
    setLoading(false);
  };
  const removeContest = async (id) => {
    await axios.delete(`http://localhost:6677/contest/delete/${id}`);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="navbar">
        {dataa === "admin" ? (
          <Link to="/admin" className="disabledCursor">
            <Button variant="primary">Student Add</Button>
          </Link>
        ) : null}
        {dataa === "admin" ? (
          <Link to="/contest" className="disabledCursor">
            <Button variant="primary">Contest Add</Button>
          </Link>
        ) : null}
        {dataa === "admin" ? (
          <Link to="/othercontest">
            <Button
              variant="primary"
              onClick={(e) => e.preventDefault()}
            >
              View Contest Details
            </Button>
          </Link>
        ) : null}
        {dataa === "admin" ? (
          <Link to="/otherstudent" className="disabledCursor">
            <Button variant="primary">View Student Details</Button>
          </Link>
        ) : null}
        <Link to="/">
          <Button variant="primary">Logout</Button>
        </Link>
      </div>
      <div className="details-div">
        {loading ? (
          <h3>We are fetching the details</h3>
        ) : contestDetails.length === 0 ? (
          <h1>
            contest have to added by admin. Yet no contest are there
            on website.
          </h1>
        ) : (
          contestDetails.map((e) => (
            <div className="innerdiv">
              <h1>
                <span className="innerstyle">Contest: </span>
                {e.title}
              </h1>
              <h4>
                {" "}
                <span
                  style={{ fontSize: "30px" }}
                  className="innerstyle"
                >
                  Topic:{" "}
                </span>
                {e.topic}
              </h4>
              <p>
                {" "}
                <span
                  style={{ fontSize: "16px" }}
                  className="innerstyle"
                >
                  Start Date:{" "}
                </span>
                {e.Start_date}
              </p>
              <p>
                {" "}
                <span
                  style={{ fontSize: "17px", color: "red" }}
                  className="innerstyle"
                >
                  End Date:{" "}
                </span>{" "}
                {e.End_date}
              </p>
              <Button
                variant="primary"
                onClick={() => removeContest(e._id)}
              >
                {dataa === "admin"
                  ? "Delete Contest"
                  : "Attempt Contest"}
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
