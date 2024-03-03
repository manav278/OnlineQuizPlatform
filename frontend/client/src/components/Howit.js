import React from "react";
import MainNav from "./MainNav";
import howit from "./assets/Howit.jpg";

export default function Howit() {
  return (
    <div>
      <MainNav></MainNav>
      <div class="container text-light">
        <div class="row justify-content-around">
          <div class="col-5">
            <div className="row">
              <div className="col-12">
                <h1>Online</h1>
              </div>
              <div className="col-12">
                <h1>Quiz Platform</h1>
              </div>
              <div className="col-12 my-3">
                <p>
                  Welcome to QuizMania. Seamless Skills and knowledge evaluation
                  solution. Enjoy dynamic quizzing from anywhere in the world.
                  Conduct Virtual Quizzes With Our Secure and Robust Examination
                  Platform.
                </p>
              </div>
            </div>
          </div>
          <div class="col-5 bg-danger">
            <img src={howit}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
