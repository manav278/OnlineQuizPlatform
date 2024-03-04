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
import MainNav from "./MainNav";
export default function Quiz() {
  const obj = [
    {
      title: "Math Quiz",
      path: math,
      alt:"Math"
    },
    {
      title: "History Quiz",
      path: history,
      alt:"History"
    },
    {
      title: "Science Quiz",
      path: science,
      alt:"Science"
    },
    {
      title: "Geography Quiz",
      path: geography,
      alt:"Geography"
    },
    {
      title: "Sports Quiz",
      path: sports,
      alt:"Sports"
    },
    {
      title: "Architecture Quiz",
      path: architecture,
      alt:"Architecture"
    },
    {
      title: "Technology Quiz",
      path: technology,
      alt:"Technology"
    },
    {
      title: "Business Quiz",
      path: business,
      alt:"Business"
    },
  ];
  return (
    <div>
      <MainNav></MainNav>
      <div className="container-fluid text-light font-family">
        <div className="row gx-4 gy-5">
          {/* --------------------------------------- */}
          {obj.map((ob, index) => (
            <div className="col-12 col-sm-4 col-md-3">
              <div
                className="bg-card text-dark"
                style={{
                  height: "100%",
                }}
              >
                <div className="row">
                  {/* ---------------------------------------- */}
                  <div className="col-12">
                    <img
                      src={ob.path}
                      style={{ width: "100%", height: "12rem" }}
                      alt={ob.alt}
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
