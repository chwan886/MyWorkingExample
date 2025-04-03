import {React, useEffect, useContext, useLayoutEffect} from "react";
import { useOutletContext } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {CHECK_TYPE} from "../Common/CheckboxGroup";
import CheckboxGroup from "../Common/CheckboxGroup"
import { PATH } from "../../IndexRouter";
import {VocabularyContext} from './VocabularyContainer'
import style from './css/EnglishStudy.module.css'

export const TEST_OPTIONS = [
    "2题",
    "25题",
    "50题",
    "100题",
    "150题"
]

export const TEST_OPTIONS_VALUES = {
    "2题": 2,
    "25题": 25,
    "50题": 50,
    "100题": 100,
    "150题": 150
}

const VocabularyMain = ()=>{
    const { message, setMessage } = useOutletContext();
    const vocabularies = useContext(VocabularyContext);

    useEffect(()=>{
        message.checkedOption = [TEST_OPTIONS[0]]
        setMessage(message);
    })

    useLayoutEffect(()=>{
        if(vocabularies.length > 0 && !TEST_OPTIONS_VALUES[`${vocabularies.length}题`])
        {
            TEST_OPTIONS.push(`${vocabularies.length}题`);
            TEST_OPTIONS_VALUES[`${vocabularies.length}题`] = vocabularies.length;
        }
    })

    return (
        <div className={style.container_div}>
            <NavLink className={style.body_navi_btn} to={PATH.VOCABULARY_CHECK} >Let's Start Test!</NavLink>
            <CheckboxGroup options={TEST_OPTIONS} type={CHECK_TYPE.SINGLE} defaultSelections={[TEST_OPTIONS[0]]} onCheckChange={(checkedOptions)=>{
                if(message)
                {
                    message.checkedOption = checkedOptions[0];
                    console.log(`set Message ${message.checkedOption}`)
                    setMessage(message);
                }else{
                    console.log("message is null");
                }
            }}/>
        </div>
    )
};

export default VocabularyMain;
