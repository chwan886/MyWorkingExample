import {React, useLayoutEffect, useRef, createContext, useState, useMemo} from "react";
import Header from "../Common/Header";
import { NavLink, Outlet } from "react-router-dom";
import style from './css/Home.module.css'
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
                <NavLink to="/" end className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}>Main Page</NavLink>
                    <NavLink to="/News" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}>News</NavLink>
                    <NavLink to="/Notes" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}>Notes</NavLink>
                    <NavLink to="/EnglishStudy" className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}>English Study</NavLink>
                </nav>
            </Header>
            <HomeContentContainer.Provider value={contextValue}>
                <Outlet/>
            </HomeContentContainer.Provider>
        </div>
    )
};

export default Home;
