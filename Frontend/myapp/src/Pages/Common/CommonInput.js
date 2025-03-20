import React from "react";
import style from "./css/Common.module.css";

const CommonInput = ({ onInputChange = ()=>{}, onButtonClick = ()=>{}, buttonText = "Search", placeholder = "Type to Search...", inputRef= null }) => {
    return (
        <div className={style.inputContainer} ref={inputRef}>
            <input
                className={style.inputBox}
                type="text"
                placeholder={placeholder}
                onChange={(event) => onInputChange(event.target.value)}
            />
            <button className={style.inputButton} onClick={()=>{
                if(inputRef.current)
                {
                    onButtonClick(inputRef.current.value);
                }
            }}>
                {buttonText}
            </button>
        </div>
    );
};

export default CommonInput;;
