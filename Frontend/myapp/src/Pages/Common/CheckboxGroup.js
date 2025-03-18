import {React, useState} from "react";

export const CHECK_TYPE = {
    SINGLE: 1,
    MULTIPLE: 2
};

const CheckboxGroup = ({type, options, onCheckChange}) => {
    const [checkedOptions, setChechedOptions] = useState([])

    const handleChange = (event)=>{
        const { value, checked } = event.target;
        console.log(event.target)
        if(type === CHECK_TYPE.MULTIPLE)
        {
            setChechedOptions((prev)=>{
                onCheckChange([...prev, value])
                return checked ? [...prev, value] : prev.filter((item)=>item !== value)
            })
        }else{
            onCheckChange([value])
            setChechedOptions([value])
        }
        console.log(`option ${value} is checked.`)
    }

    return (
        <div>
            {
                options.map((option)=>{
                    return (<label>
                                <input 
                                key={option}
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
