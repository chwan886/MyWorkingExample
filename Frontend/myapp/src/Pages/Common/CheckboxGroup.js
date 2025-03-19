import {React, useState, useEffect} from "react";
import style from "./css/Common.module.css"

export const CHECK_TYPE = {
    SINGLE: 1,
    MULTIPLE: 2
};
//type, options, defaultSelections, selectedOptions, onCheckChange
const CheckboxGroup = ({type, options, defaultSelections, selectedOptions, onCheckChange}) => {
    const [checkedOptions, setChechedOptions] = useState([])

    useEffect(() => {
        setChechedOptions(defaultSelections || selectedOptions || []);
    }, [selectedOptions, defaultSelections]);

    const handleChange = (event)=>{
        const { value, checked } = event.target;
        console.log(event.target)
        if(type === CHECK_TYPE.MULTIPLE)
        {
            setChechedOptions((prev)=>{
                const newCheckedOptions = checked ? [...prev, value] : prev.filter((item) => item !== value);
                onCheckChange(newCheckedOptions);
                return newCheckedOptions;
            })
        }else{
            setChechedOptions([value])
            onCheckChange([value])
        }
        console.log(`option ${value} is checked.`)
    }

    return (
        <div className={style.checkbox_container}>
            {
                options.map((option, index)=>{
                    return (<label className={checkedOptions.includes(option)?style.checkbox_active:style.checkbox}>
                                <input 
                                id={`checkbox-${index}`} 
                                type="checkbox" 
                                value={option}
                                checked={checkedOptions.includes(option)}
                                onChange={handleChange}
                                />
                            {option}
                            </label>)
                })
            }
        </div>
    )
}

export default CheckboxGroup;
