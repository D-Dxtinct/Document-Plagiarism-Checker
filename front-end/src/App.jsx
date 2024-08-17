import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SimilaritiesResults from "./pages/similarityResults";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/similarites result" element={<SimilaritiesResults />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
