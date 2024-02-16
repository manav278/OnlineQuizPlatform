import React from "react";
import math from "./math.jpg";
import science from "./science.jpg";
export default function Quiz() {
  return (
    <div>
      <div className="container">
        <div className="row g-5">
          <div className="col-md-3">
            <div
              style={{
                height: "50vh",
                border: "2px solid black",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img src={math} className="image" alt="Math"></img>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                height: "50vh",
                border: "2px solid black",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img src={science} className="image" alt="Science"></img>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                height: "50vh",
                border: "2px solid black",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img src={science} className="image" alt="Science"></img>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                height: "50vh",
                border: "2px solid black",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img src={science} className="image" alt="Science"></img>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                height: "50vh",
                border: "2px solid black",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img src={science} className="image" alt="Science"></img>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                height: "50vh",
                border: "2px solid black",
                overflow: "hidden",
                borderRadius: "8px"
              }}
            >
              <img src={science} className="image" alt="Science"></img>
              <h3>Science Quiz</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
