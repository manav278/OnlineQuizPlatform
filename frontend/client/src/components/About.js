import React from "react";
import MainNav from "./MainNav";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <MainNav></MainNav>
      <div className="container bg-light text-dark font-family" style={{borderRadius:"8px",padding:"1%"}}>
      <p>
        Our platform offers a wide range of quizzes covering diverse topics.Welcome to our online quiz platform, where learning meets fun! We are dedicated to providing an engaging and interactive environment for users of all ages to explore and expand their knowledge in a variety of subjects.With a user-friendly interface and carefully crafted questions, we make learning enjoyable and rewarding.We believe in the power of education and lifelong learning, and our platform is designed to inspire curiosity, critical thinking, and continuous improvement. Join our community today and embark on a journey of knowledge discovery and intellectual growth. Let's quiz it up together!
      </p>
      </div>
      <Footer></Footer>
    </div>
  );
}
