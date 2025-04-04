import {React, useLayoutEffect, useRef, createContext, useState, useMemo} from "react";
import Header from "../Common/Header";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import style from './css/Home.module.css'
import { PATH } from "../../IndexRouter";
export const HomeContentContainer = createContext({
    headerHeight: 100,
    screenHeight: 100
});
const Home = () => {
    const headerRef = useRef(null);
    const [context, setContext] = useState({
        headerHeight: 0,
        screenHeight: 0
    });
    const contextValue = useMemo(() => context, [context]);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNaviClick = (path)=>{
        if(!location.pathname.startsWith(path))
        {
            navigate(path);
        }
    }

    useLayoutEffect(() => {
        const updateDimensions = () => {
            if (headerRef.current) {
                //console.log(`header height ${headerRef.current.offsetHeight}, screen height ${window.innerHeight}`)
                setContext(prevContext => ({
                    ...prevContext,
                    headerHeight: headerRef.current.offsetHeight,
                    screenHeight: window.innerHeight
                }));
            }
        };
    
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
    
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <div className={style.homeMain}>
            <Header ref={headerRef}>
                <nav>
                    <NavLink to={PATH.HOME} end className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={(e)=>{
                        e.preventDefault();
                        handleNaviClick(PATH.HOME);
                    }}>Main Page</NavLink>
                    <NavLink to={PATH.NEWS} className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={(e)=>{
                        e.preventDefault();
                        handleNaviClick(PATH.NEWS);
                    }}>News</NavLink>
                    <NavLink to={PATH.NOTES} className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={(e)=>{
                        e.preventDefault();
                        handleNaviClick(PATH.NOTES);
                    }}>Notes</NavLink>
                    <NavLink to={PATH.ENGLISH_STUDY} className={({ isActive }) => (isActive ? style.activeLink : style.navLink)} onClick={(e)=>{
                        e.preventDefault();
                        handleNaviClick(PATH.ENGLISH_STUDY);
                    }}>English Study</NavLink>
                </nav>
            </Header>
            <HomeContentContainer.Provider value={contextValue}>
                <Outlet/>
            </HomeContentContainer.Provider>
        </div>
    )
};

export default Home;
