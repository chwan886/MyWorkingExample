import {React, useRef, useLayoutEffect} from "react";
import Header from "../Common/Header";
import { Link, Outlet, useNavigate } from "react-router-dom";
import style from './css/Home.module.css'



const Home = () => {
    let navigate = useNavigate()
    const headerRef = useRef(null)
    const bodyRef = useRef(null)

    useLayoutEffect(()=>{
        //divRef.current.offsetHeight
        if(headerRef.current && bodyRef.current)
        {
            console.log(headerRef.current.offsetHeight)
            bodyRef.current.style.marginTop = `${headerRef.current.offsetHeight}px`
        }
    }, [])

    return (
        <div className={style.homeMain}>
            <Header ref={headerRef}>
                <Link to="/News" className={style.link}>News</Link>
                <Link to="/Notes" className={style.link}>Notes</Link>
                <Link to="/EnglishStudy">English Study</Link>
                <button onClick={()=>{
                    navigate('./News')
                }}>News</button>
            </Header>
            <div ref={bodyRef}/>
            <Outlet/>
        </div>
    )
};

export default Home;
