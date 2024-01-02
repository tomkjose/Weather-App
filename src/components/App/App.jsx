import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Fof } from "../../pages/Index";
import Navbar from "../Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route excat path="/" element={<Home />}></Route>
          <Route path="*" element={<Fof />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
