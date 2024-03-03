import "./App.css";
import Quiz from "./components/Quiz";
import Termsconditions from "./components/Termsconditions"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Howit from "./components/Howit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Howit />} />
        <Route exact path="/quiz" element={<Quiz />} />
        <Route path="/termsconditions" element={<Termsconditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
