import React, { useState, useEffect } from "react";
import axios from "axios";
import MainNav from "./MainNav";
import Footer from "./Footer";

const Quizquestions = () => {
  //   const [questions, setQuestions] = useState([]);

  //   useEffect(() => {
  //     const fetchQuizQuestions = async () => {
  //       try {
  //         const response = await axios.get(
  //           `http://localhost:9090/api/quiz/${match.params.id}`
  //         );
  //         console.log(response);
  //         setQuestions(response.data.questions);
  //       } catch (error) {
  //         console.error("Error fetching quiz questions:", error);
  //       }
  //     };
  //     fetchQuizQuestions();
  //   }, [match.params.id]);
  const questions = [
    {
      question: "What is the result of 2 + 3 * 4?",
      options: ["14", "20", "10", "9"],
    },
    {
      question: "What is the result of 2 + 3 * 4?",
      options: ["14", "20", "10", "9"],
    },
    {
      question: "What is the result of 2 + 3 * 4?",
      options: ["14", "20", "10", "9"],
    },
    {
      question: "What is the result of 2 + 3 * 4?",
      options: ["14", "20", "10", "9"],
    },
    {
      question: "What is the result of 2 + 3 * 4?",
      options: ["14", "20", "10", "9"],
    },
    {
      question: "What is the result of 2 + 3 * 4?",
      options: ["14", "20", "10", "9"],
    },
    {
      question: "What is the result of 2 + 3 * 4?",
      options: ["14", "20", "10", "9"],
    },
    {
      question: "What is the result of 2 + 3 * 4?",
      options: ["14", "20", "10", "9"],
    },
    {
      question: "What is the result of 2 + 3 * 4?",
      options: ["14", "20", "10", "9"],
    },
    {
      question: "What is the result of 2 + 3 * 4?",
      options: ["14", "20", "10", "9"],
    },
  ];

  return (
    <div>
      <MainNav></MainNav>
      <h1 className="text-center text-light my-5">Quiz Questions</h1>
      <div className="text-light container p-5">
        {questions.map((question, index) => (
          <div className="container bg-dark">
            <div key={index}>
              <h5>
                {index + 1}) {question.question}
              </h5>
              <p>
                <ul>
                  {question.options.map((option, i) => (
                    <li key={i}>{option}</li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        ))}
        <div>
          <button type="button" className="play-btn-question">
            <b>Play</b>
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Quizquestions;
