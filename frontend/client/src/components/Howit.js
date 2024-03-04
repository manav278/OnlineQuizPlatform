import React from "react";
import MainNav from "./MainNav";
import howit from "./assets/Howit.jpg";
import Footer from "./Footer"

export default function Howit() {
  return (
    <div>
      <MainNav></MainNav>
      <div class="container text-light raleway-font">
        <div class="row justify-content-around">
          <div class="col-md-6 order-md-first order-last" style={{padding:"5%"}}>
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
          <div class="col-md-6  order-md-last order-first" style={{padding:"2%"}}>
            <img src={howit} className="img-fluid"></img>
            {/* 655*381 */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
