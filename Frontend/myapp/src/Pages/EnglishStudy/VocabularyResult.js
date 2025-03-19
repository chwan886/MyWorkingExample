import React, { useLayoutEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import style from './css/EnglishStudy.module.css'

const VocabularyResult = ()=>{
    const {message} = useOutletContext();
    const [correctSum, setCorrectSum] = useState(0);
    useLayoutEffect(()=>{
        if(message.testResults)
        {
            console.log(message.testResults);
            let correctCount = Array.from(message.testResults.values()).filter(res => res).length;
            setCorrectSum(correctCount);
        }
    },[message.testResults])

    return (
        <div className={style.result_container}>
            <ul className={style.ul}>
                {message.testResults ? (
                    Array.from(message.testResults.keys()).map((key) => {
                        let res = message.testResults.get(key);
                        return (
                            <li key={key} id={key}>
                                <span>{key}</span> 
                                <span>{res ? "✅" : "❌"}</span>
                            </li>
                        );
                    })
                ) : (
                    <div>没有测试结果...</div>
                )}
            </ul>
            <div className={style.result_analysis_container}>
                <div>
                    结果分析: 
                </div>
                <div>
                    总共{message.testResults?message.testResults.size:0}道题
                </div>
                <div>
                    答对{correctSum}道题
                </div>
                <div>
                    答错{message.testResults?message.testResults.size - correctSum:0}道题
                </div>
                <div>
                    正确率{message.testResults?(correctSum/message.testResults.size)*100:"0.0"}%
                </div>
            </div>
        </div>
    )
}

export default VocabularyResult;
