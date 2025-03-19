import {React, useLayoutEffect, useRef, useContext} from "react";
import style from "./css/EnglishStudy.module.css"
import {NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { HomeContentContainer } from "../Home/Home";
import { PATH } from "../../IndexRouter";

const EnglishStudyMain = () => {
    const mainRef = useRef(null);
    const {headerHeight, screenHeight} = useContext(HomeContentContainer)
    const navigate = useNavigate();
    const location = useLocation();

    useLayoutEffect(()=>{
        if(mainRef.current)
        {
            mainRef.current.style.height = `${screenHeight - headerHeight}px`;
        }
    }, [headerHeight, screenHeight]);

    const handleNavClick = (targetPath) => {
        if (!location.pathname.startsWith(targetPath)) {
            navigate(targetPath);
        }
    };

    return (
        <div ref={mainRef} className={style.main}>
            <div className={style.toolbar}>
                <NavLink to={PATH.VOCABULARY_MAIN} className={({isActive}) => isActive?style.navi_active:style.navi} onClick={(e)=>{
                    e.preventDefault(); // 防止 NavLink 自带的跳转
                    handleNavClick(PATH.VOCABULARY_MAIN);
                }}>Vocabulary check</NavLink>
                <NavLink to={PATH.GRAMMARS_MAIN} className={({isActive}) => isActive?style.navi_active:style.navi} onClick={(e)=>{
                    e.preventDefault(); // 防止 NavLink 自带的跳转
                    handleNavClick(PATH.GRAMMARS_MAIN);
                }}>Grammars</NavLink>
            </div>
            <div className={style.vertical_line}/>
            <div className={style.body}>
                <Outlet/>
            </div>
        </div>
    )
};

export default EnglishStudyMain;
