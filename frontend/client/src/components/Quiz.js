import React from "react";
import math from "./assets/math.jpg";
import science from "./assets/science.jpg";
import business from "./assets/business.jpg";
import sports from "./assets/sports.jpg";
import history from "./assets/history.jpg";
import geography from "./assets/geography.jpg";
import architecture from "./assets/architecture.jpg";
import technology from "./assets/technology.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
export default function Quiz() {
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
      <div className="container-fluid text-light font-family">
        <div className="row gx-3 gy-3">
          {/* --------------------------------------- */}
          {obj.map((ob, index) => (
            <div className="col-12 col-sm-4 col-md-3">
              <div
                className="bg-card text-dark"
                style={{
                  height: "100%",
                  border: "2px solid black",
                  borderRadius: "8px",
                }}
              >
                <div className="row">
                  {/* ---------------------------------------- */}
                  <div className="col-12">
                    <img
                      src={ob.path}
                      style={{ width: "100%", height: "12rem" }}
                    ></img>
                  </div>
                  <div className="col-12" style={{ paddingLeft: "5%" }}>
                    <h3>{ob.title}</h3>
                  </div>

                  {/* ---------------------------------------- */}

                  <div className="col-12">
                    <div className="container" style={{ marginTop: "4%" }}>
                      <div className="row gx-4">
                        <div className="col-lg-5">
                          <div
                            style={{ textAlign: "center", fontWeight: "800" }}
                          >
                            10
                          </div>
                          <div style={{ textAlign: "center" }}>Questions</div>
                        </div>
                        <div className="col-lg-7 text-center">
                          <button
                            type="button"
                            className="play-btn"
                            style={{
                              border: "2px",
                              width: "60%",
                              marginTop: "1%",
                            }}
                          >
                            <b>Play</b>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---------------------------------------- */}

                  <div className="col-12">
                    <hr className="text-dark"></hr>
                  </div>

                  {/* ---------------------------------------- */}

                  <div className="col-12 text-end">
                    <Link
                      to="/termsconditions"
                      style={{ textDecorationColor: "black" }}
                    >
                      <p style={{ marginRight: "2%", color: "black" }}>
                        View T&C
                      </p>
                    </Link>
                  </div>

                  {/* ---------------------------------------- */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
