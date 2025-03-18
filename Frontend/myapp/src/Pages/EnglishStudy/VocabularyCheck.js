import {React, useContext, useState, useEffect, useCallback, useMemo} from "react";
import {VocabularyContext} from './VocabularyContainer'

const VocabularyCheck = ()=>{
    const vocabularies = useContext(VocabularyContext);
    const uniqueWords = useMemo(()=>Array.isArray(vocabularies) ? new Set(vocabularies) : new Set(), [vocabularies])
    const [remainWords, setRemainWords] = useState(0);
    const [currentWord, setCurrentWord] = useState("");
        // 生成不同的随机单词
    const getRandomWord = useCallback(()=>{
        if (uniqueWords.length === 0) 
        {
            console.log("uniqueWords lenth is 0")
            return;
        }
        console.log("test1")
        console.log(uniqueWords)
        const newWord = getRandomSetElement(uniqueWords);
        console.log(`${newWord}`)
        setCurrentWord(newWord);

        uniqueWords.delete(newWord);
        setRemainWords(uniqueWords.size);
    }, [uniqueWords])

    const getRandomSetElement = (set) => {
        let randIndex = Math.floor(Math.random() * set.size);
        let iterator = set.values(); // 获取 Set 迭代器
        let result;
    
        while (randIndex-- >= 0) {
            result = iterator.next().value; // 迭代到目标位置
        }
        return result;
    };

    // 初始化第一个单词
    useEffect(() => {
        if (uniqueWords.size > 0) {
            getRandomWord();
        }
    }, [uniqueWords, getRandomWord]); // 当 `uniqueWords` 变化时，重新选择单词

    return (
        <div>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{currentWord || "Loading..."}</p>
            <button onClick={getRandomWord}>Next Word</button>
            <div>{remainWords}/{vocabularies.length} Tested!</div>
        </div>
    )
};

export default VocabularyCheck;
