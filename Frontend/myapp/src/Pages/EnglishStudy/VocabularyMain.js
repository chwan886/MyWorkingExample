import {React} from "react";
import { useOutletContext } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {CHECK_TYPE} from "../Common/CheckboxGroup";
import CheckboxGroup from "../Common/CheckboxGroup"

export const TEST_OPTIONS = [
    "25题",
    "50题",
    "100题",
    "150题"
]

export const TEST_OPTIONS_VALUES = {
    "25题": 25,
    "50题": 50,
    "100题": 100,
    "150题": 150
}

const VocabularyMain = ()=>{
    const { message, setMessage } = useOutletContext();
    return (
        <div>
            <NavLink to="/EnglishStudy/Vocabulary_Check/main/details">Start Test!</NavLink>
            <CheckboxGroup options={TEST_OPTIONS} type={CHECK_TYPE.SINGLE} onCheckChange={(checkedOptions)=>{
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
