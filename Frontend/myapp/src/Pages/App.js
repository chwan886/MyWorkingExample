import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Notes from "./Notes";
import News from "./News";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/News" element={<News/>}/>
      </Routes>
    </Router>
  );
}

export default App;
