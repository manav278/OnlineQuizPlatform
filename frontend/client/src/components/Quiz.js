import React from "react";
import math from "./assets/math.jpg";
import science from "./assets/science.jpg";
import business from "./assets/business.jpg";
import sports from "./assets/sports.jpg";
import history from "./assets/history.jpg";
import geography from "./assets/geography.jpg";
import architecture from "./assets/architecture.jpg";
import technology from "./assets/technology.jpg";
export default function Com() {
  const obj = [
    {
      title: "Math Quiz",
      path: math,
    },
    {
      title: "History Quiz",
      path: history,
    },
    {
      title: "Science Quiz",
      path: science,
    },
    {
      title: "Geography Quiz",
      path: geography,
    },
    {
      title: "Sports Quiz",
      path: sports,
    },
    {
      title: "Architecture Quiz",
      path: architecture,
    },
    {
      title: "Technology Quiz",
      path: technology,
    },
    {
      title: "Business Quiz",
      path: business,
    },
  ];
  return (
    <div>
      <div className="container-fluid text-light">
        <div className="row g-3">
          {/* --------------------------------------- */}
          {obj.map((ob, index) => (
            <div className="col-6 col-md-4 col-lg-3">
              <div
                className="bg-dark"
                style={{
                  height: "50vh",
                  border: "2px solid black",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <img src={ob.path} className="image" alt="Math"></img>
                <h3>{ob.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
