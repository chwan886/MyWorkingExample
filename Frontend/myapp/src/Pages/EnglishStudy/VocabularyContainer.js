import React, { useEffect, useState, createContext } from "react";
import { Outlet } from "react-router-dom";

// 创建 Context
export const VocabularyContext = createContext([]);

const Vocabulary = () => {
    const path = "/data/Vocabulary";
    const [textArray, setTextArray] = useState([]);
    useEffect(()=>{
        fetch(path)
        .then((response) => response.text())
        .then((text) => {
            setTextArray(text.split("\n"))
        })
        .catch((error) => console.error("Error fetching file:", error));
    }, [])

    return (
        <VocabularyContext.Provider value={textArray}>
            <Outlet/>
        </VocabularyContext.Provider>
    )
};

export default Vocabulary;