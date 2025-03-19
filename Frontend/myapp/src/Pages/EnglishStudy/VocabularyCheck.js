import {React, useContext, useState, useEffect, useCallback} from "react";
import {VocabularyContext} from './VocabularyContainer'
import { useOutletContext, NavLink } from "react-router-dom";
import { TEST_OPTIONS_VALUES } from "./VocabularyMain";
import CheckboxGroup, {CHECK_TYPE} from "../Common/CheckboxGroup";
import { PATH } from "../../IndexRouter";
import style from './css/EnglishStudy.module.css'

const ANSWER_OPTIONS = [
    "记得",
    "不记得"
]

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
    const { message, setMessage } = useOutletContext();
    const vocabularies = useContext(VocabularyContext);
    const [remainWords, setRemainWords] = useState(0);
    const [currentWord, setCurrentWord] = useState("");
    const [selectedOption, setSelectedOption] = useState([]);

        // 生成不同的随机单词
    const getRandomWord = useCallback(()=>{
        if (uniqueWords.length === 0) 
        {
            setRemainWords(0);
            console.log("uniqueWords lenth is 0")
            return;
        }
        const newWord = uniqueWords[uniqueWords.length-1];
        console.log(`${newWord}`)
        setCurrentWord(newWord);

        uniqueWords.splice(uniqueWords.length-1, 1);
        setRemainWords(uniqueWords.length+1);
        setSelectedOption([]);
    }, [])

    useEffect(() => {
        //console.log(`the test will be ${message.checkedOptions[0]}`)
        uniqueWords = getRandomElements(vocabularies, TEST_OPTIONS_VALUES[message.checkedOption]);
        console.log(`uniqueWords length is ${uniqueWords.length}`)
        if (uniqueWords.length > 0) {
            console.log("useEffect getRandomWord()");
            message.testResults = new Map();
            uniqueWords.forEach(word => {
                message.testResults.set(word, false);
            });
            getRandomWord();
        }
    }, [getRandomWord, message.checkedOption, vocabularies, message]); // 当 `uniqueWords` 变化时，重新选择单词

    return (
        <div className={style.vocabularyCheck_container}>
            <div className={style.vocabulary}>{currentWord || "Loading..."}</div>
            <CheckboxGroup options={ANSWER_OPTIONS} type={CHECK_TYPE.SINGLE} selectedOptions={selectedOption} onCheckChange={(checkedOptions)=>{
                console.log(`callback checkbox option is ${checkedOptions[0]}, ANSWER_OPTIONS[0] is ${ ANSWER_OPTIONS[0]} `);
                if(checkedOptions[0] === ANSWER_OPTIONS[0])
                {
                    message.testResults.set(currentWord, true);
                }else{
                    message.testResults.set(currentWord, false);
                }
                setSelectedOption(checkedOptions);
            }}/>
            {
                remainWords === 0?
                <NavLink onClick={()=>setMessage(message)} to={PATH.VOCABULARY_RESULT}>查看测试结果!</NavLink>:
                <div>
                    还剩{remainWords}/{TEST_OPTIONS_VALUES[message.checkedOption]}个单词
                    <button onClick={()=>{
                        getRandomWord();
                    }}>下一题</button>
                </div>
            }

        </div>
    )
};

export default VocabularyCheck;
