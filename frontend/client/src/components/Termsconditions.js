import React from "react";

export default function Termsconditions() {
  return (
    <div>
      <h1 className="text-light" style={{ textAlign: "center",fontFamily:"cursive" }}>
        Terms And Conditons
      </h1>
      <div className="container-fluid" style={{ marginTop: "1%" }}>
        <div className="row justify-content-center">
          <div className="col-9">
            <div
              className="row text-dark bg-card font-family"
              style={{
                borderRadius: "10px",
                border: "2px solid white",
                paddingTop: "2%",
                paddingBottom: "2%",
              }}
            >
              <div className="col-12">
                <div>
                  1. The Quiz questions are designed carefully to assess the
                  knowledge and understanding of Play True for the promotion of
                  fair play and clean sports in the country.
                  <hr className="text-dark"></hr>
                </div>
              </div>
              <div className="col-12">
                <div>
                  2. Each question in the Quiz is in the Multiple-Choice Format
                  and has only one correct answer.
                  <hr className="text-dark"></hr>
                </div>
              </div>
              <div className="col-12">
                <div>
                  3. Each Question carries 1 mark. Students are required to
                  attempt all questions in total.
                  <hr className="text-dark"></hr>
                </div>
              </div>
              <div className="col-12">
                <div>
                  4. Participants will be required to answer 10 questions.
                  <hr className="text-dark"></hr>
                </div>
              </div>
              <div className="col-12">
                <div>
                  5. You can attempt the Quiz only once and only one option will
                  be accepted for a question. However, you may revise your
                  answer before final submission.
                  <hr className="text-dark"></hr>
                </div>
              </div>
              <div className="col-12">
                <div>
                  6. After responding to a question, click the “Next Question”
                  button to go to the next question.
                  <hr className="text-dark"></hr>
                </div>
              </div>
              <div className="col-12">
                <div>7. No negative marking will be done.</div>
                <hr className="text-dark"></hr>
              </div>
              <div className="col-12">
                <div>
                  8. After attempting questions, a final submission should be
                  clicked. No changes can be made after the final submission.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
