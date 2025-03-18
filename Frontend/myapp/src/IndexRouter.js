import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Notes from "./Pages/Notes";
import News from "./Pages/News/News";
import HomeBody from "./Pages/Home/HomeBody"
import EnglishStudyMain from "./Pages/EnglishStudy/EnglishStudyMain";

const IndexRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
            <Route index element={<HomeBody/>} />
            <Route path="/Notes" element={<Notes />} />
            <Route path="/News" element={<News />} />
            <Route path="/EnglishStudy" element={<EnglishStudyMain />}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default IndexRouter;