import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Notes from "./Pages/Notes";
import News from "./Pages/News/NewsMain";
import HomeBody from "./Pages/Home/HomeBody"
import EnglishStudyMain from "./Pages/EnglishStudy/EnglishStudyMain";
import Grammars from "./Pages/EnglishStudy/Grammer";
import VocabularyContainer from "./Pages/EnglishStudy/VocabularyContainer";
import VocabularyCheck from "./Pages/EnglishStudy/VocabularyCheck";
import VocabularyMain from "./Pages/EnglishStudy/VocabularyMain";
import VocabularyResult from "./Pages/EnglishStudy/VocabularyResult";
import NewsHeadlines from "./Pages/News/NewsHeadlines";
import NewsEverything from "./Pages/News/NewsEverything";

export const PATH = {
  ROOT: "/",
  HOME: "/Home",
  NEWS: "/News",
  NEWS_HEADLINES: "/News/Headlines",
  NEWS_EVERYTHING: "/News/Everything",
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
            <Route index element={<Navigate to={PATH.HOME} replace />} />
            <Route path="/Home" element={<HomeBody/>} />
            <Route path="/Notes" element={<Notes />} />
            <Route path="/News" element={<News />} >
                <Route index element={<Navigate to={PATH.NEWS_HEADLINES} replace />} />
                <Route path={PATH.NEWS_HEADLINES} element={<NewsHeadlines/>}/>
                <Route path={PATH.NEWS_EVERYTHING} element={<NewsEverything/>}/>
            </Route>
            <Route path="/EnglishStudy" element={<EnglishStudyMain />}>
                <Route index element={<Navigate to={PATH.VOCABULARY_MAIN} replace />} />
                <Route path="Vocabulary_Check" element={<VocabularyContainer/>}>
                    <Route index element={<VocabularyMain/>}/>
                    <Route path="details" element={<VocabularyCheck/>}/>
                    <Route path="results" element={<VocabularyResult/>}/>
                </Route>
                <Route path="Grammars" element={<Grammars/>}/>
            </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default IndexRouter;