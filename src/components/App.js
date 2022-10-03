import Create from "../pages/Create";
import Home from "../pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Event from "../pages/Event";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
