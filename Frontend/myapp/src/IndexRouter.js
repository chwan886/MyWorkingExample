import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Notes from "./Pages/Notes";
import News from "./Pages/News/News";
import HomeBody from "./Pages/Home/HomeBody"
import EnglishStudyMain from "./Pages/EnglishStudy/EnglishStudyMain";
import Grammars from "./Pages/EnglishStudy/Grammer";
import VocabularyContainer from "./Pages/EnglishStudy/VocabularyContainer";
import VocabularyCheck from "./Pages/EnglishStudy/VocabularyCheck";
import VocabularyMain from "./Pages/EnglishStudy/VocabularyMain";
import VocabularyResult from "./Pages/EnglishStudy/VocabularyResult";

export const PATH = {
  ROOT: "/",
  HOME: "/Home",
  NEWS: "/News",
  NOTES: "/Notes",
  ENGLISH_STUDY: "/EnglishStudy",
  VOCABULARY_MAIN: "/EnglishStudy/Vocabulary_Check",
  VOCABULARY_CHECK: "/EnglishStudy/Vocabulary_Check/details",
  VOCABULARY_RESULT: "/EnglishStudy/Vocabulary_Check/results",
  GRAMMARS_MAIN: "/EnglishStudy/Grammars"
}

const IndexRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
            <Route index path="/Home" element={<HomeBody/>} />
            <Route path="/Notes" element={<Notes />} />
            <Route path="/News" element={<News />} />
            <Route path="/EnglishStudy" element={<EnglishStudyMain />}>
              <Route index element={<Navigate to={PATH.VOCABULARY_MAIN} replace />} />
              <Route path="Vocabulary_Check" element={<VocabularyContainer/>}>
                <Route index element={<VocabularyMain/>}/>
                <Route path="details" element={<VocabularyCheck/>}/>
                <Route path="results" element={<VocabularyResult/>}/>
              </Route>
              <Route path="Grammars" element={<Grammars/>}>
              </Route>
            </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default IndexRouter;