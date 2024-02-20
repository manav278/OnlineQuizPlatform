import logo from "./logo.svg";
import "./App.css";
import Quiz from "./components/Quiz";
import Termsconditions from "./components/Termsconditions"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Quiz />} />
        <Route path="/termsconditions" element={<Termsconditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
