import React from "react";
import style from './css/Common.module.css'

const Banner = ({children}) => {
    return (
        <div className={style.banner1}>
            This is Banner!
            {children}
        </div>
    )
};

export default Banner;
