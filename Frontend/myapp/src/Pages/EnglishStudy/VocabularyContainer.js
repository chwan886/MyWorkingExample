import React, { useEffect, useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import urls from "../../res/urls";

// 创建 Context
export const VocabularyContext = createContext([]);

const Vocabulary = () => {
    const path = urls.ENGLISH_STUDY.VOCABULARIES;
    const [textArray, setTextArray] = useState([]);
    const [message, setMessage] = useState({});
    useEffect(()=>{
        fetch(path)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json)
            setTextArray(json.vocabularies)
        })
        .catch((error) => console.error("Error fetching file:", error));
    }, [])

    return (
        <VocabularyContext.Provider value={textArray}>
            <Outlet context={{message, setMessage}}/>
        </VocabularyContext.Provider>
    )
};

export default Vocabulary;

