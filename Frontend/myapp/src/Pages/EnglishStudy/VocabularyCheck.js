import {React, useContext, useState, useEffect, useCallback} from "react";
import {VocabularyContext} from './VocabularyContainer'
import { useOutletContext } from "react-router-dom";
import { TEST_OPTIONS_VALUES } from "./VocabularyMain";

const getRandomElements = (arr, x) => {
    if (x > arr.length) x = arr.length;

    const shuffled = arr.slice(); // 复制数组，避免修改原数组
    for (let i = arr.length - 1; i > arr.length - 1 - x; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // 交换元素
    }
    console.log(`getRandomElements: ${x}`);
    return shuffled.slice(arr.length - x);
};

let uniqueWords = [];

const VocabularyCheck = ()=>{
    const { message } = useOutletContext();
    const vocabularies = useContext(VocabularyContext);
    const [remainWords, setRemainWords] = useState(0);
    const [currentWord, setCurrentWord] = useState("");
        // 生成不同的随机单词
    const getRandomWord = useCallback(()=>{
        if (uniqueWords.length === 0) 
        {
            console.log("uniqueWords lenth is 0")
            return;
        }
        const newWord = uniqueWords[uniqueWords.length-1];
        console.log(`${newWord}`)
        setCurrentWord(newWord);

        uniqueWords.splice(uniqueWords.length-1, 1);
        setRemainWords(uniqueWords.length);
    }, [])

    // 初始化第一个单词
    useEffect(() => {
        //console.log(`the test will be ${message.checkedOptions[0]}`)
        uniqueWords = getRandomElements(vocabularies, TEST_OPTIONS_VALUES[message.checkedOption]);
        console.log(`uniqueWords length is ${uniqueWords.length}`)
        if (uniqueWords.length > 0) {
            console.log("useEffect getRandomWord()")
            getRandomWord();
        }
    }, [getRandomWord, message.checkedOption, vocabularies]); // 当 `uniqueWords` 变化时，重新选择单词

    return (
        <div>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{currentWord || "Loading..."}</p>
            <button onClick={getRandomWord}>Next Word</button>
            <div>{remainWords+1}/{TEST_OPTIONS_VALUES[message.checkedOption]} Tested!</div>
        </div>
    )
};

export default VocabularyCheck;
