import React from "react";
import MainNav from "./MainNav";
import howit from "./assets/Howit.jpg";
import whyus from "./assets/whyus.jpg";
import Footer from "./Footer";

export default function Howit() {
  return (
    <div>
      <MainNav></MainNav>
      <div class="container text-light raleway-font">
        <div class="row justify-content-around">
          <div
            class="col-md-6 order-md-first order-last"
            style={{ padding: "5%" }}
          >
            <div className="row">
              <div className="col-12 text-primary">
                <h1>Online</h1>
              </div>
              <div className="col-12 text-primary">
                <h1>Quiz Platform</h1>
              </div>
              <div className="col-12 my-1">
                <h4>
                  Welcome to QuizMania. Seamless Skills and knowledge evaluation
                  solution. Enjoy dynamic quizzing from anywhere in the world.
                  Conduct Virtual Quizzes With Our Secure and Robust Examination
                  Platform.
                </h4>
              </div>
            </div>
          </div>
          <div
            class="col-md-6 order-md-last order-first"
            style={{ padding: "2%" }}
          >
            <img src={howit} className="img-fluid"></img>
            {/* 655*381 */}
          </div>
        </div>
      </div>
      <div class="container text-light raleway-font">
        <div class="row justify-content-around" style={{ marginTop: "4%" }}>
          <div class="col-md-6 order-md-first order-first">
            <img src={whyus} className="img-fluid"></img>
          </div>

          <div class="col-md-6 p-4 order-md-last order-last">
            <h4>
              Selecting our quiz platform ensures a seamless and professional
              experience. Our commitment to innovation ensures ongoing
              enhancements, positioning you at the forefront of the dynamic
              online quiz landscape. Choose our platform for a professional,
              efficient, and rewarding quiz experience.
            </h4>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
