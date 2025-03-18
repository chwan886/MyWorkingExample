import {React, useLayoutEffect, useRef, useContext} from "react";
import style from "./css/EnglishStudy.module.css"
import {NavLink, Outlet } from "react-router-dom";
import { HomeContentContainer } from "../Home/Home";

const EnglishStudyMain = () => {
    const mainRef = useRef(null);
    const {headerHeight, screenHeight} = useContext(HomeContentContainer)

    useLayoutEffect(()=>{
        if(mainRef.current)
        {
            mainRef.current.style.height = `${screenHeight - headerHeight}px`;
        }
    }, [headerHeight, screenHeight]);

    return (
        <div ref={mainRef} className={style.main}>
            <div className={style.toolbar}>
                <NavLink to="/EnglishStudy/Vocabulary_Check/main" className={({isActive}) => isActive?style.navi_active:style.navi}>Vocabulary check</NavLink>
                <NavLink to="/EnglishStudy/Grammer" className={({isActive}) => isActive?style.navi_active:style.navi}>Grammars</NavLink>
            </div>
            <div className={style.body}>
                <Outlet/>
            </div>
        </div>
    )
};

export default EnglishStudyMain;
