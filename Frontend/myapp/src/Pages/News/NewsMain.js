import React, {useContext, useRef, useLayoutEffect, useEffect, useState, createContext} from 'react'
import { HomeContentContainer } from "../Home/Home";
import style from "./css/News.module.css";
import keys from '../../res/keys';
import urls from '../../res/urls';
import { Outlet } from 'react-router-dom';
import CommonInput from '../Common/CommonInput';
//https://newsapi.org/docs/authentication

export const NewsContext = createContext({});

const News = () => {
    const mainRef = useRef(null);
    const inputRef = useRef(null);
    const { headerHeight, screenHeight } = useContext(HomeContentContainer);
    const [news, setNews] = useState([]);  // ⬅️ 存储新闻列表
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${urls.NEWS.ROOTURL + urls.NEWS.TOP_HEADLINES}?country=us&apiKey=${keys.NEWS_API_KEY}`)
            .then((resp) => resp.json())  // ✅ 解析 JSON
            .then((data) => {
                setNews(data.articles || []);  // ✅ 解析 articles
                setLoading(false);
            })
            .catch((e) => {
                console.error(e);
                setError("Failed to fetch news");
                setLoading(false);
            });
    }, []);

    const performSearch = (keyword)=>{
        setLoading(true);
        fetch(`${urls.NEWS.ROOTURL + urls.NEWS.EVERYTHING}?q=${keyword}&apiKey=${keys.NEWS_API_KEY}`)
            .then((resp)=>resp.json())
            .then((data) =>{
                setNews(data.articles || []);  // ✅ 解析 articles
                setLoading(false);
            })
            .catch((e)=>{
                console.error(e);
                setError("Failed to search keyword.");
                setLoading(false);
            })
    }

    useLayoutEffect(() => {
        if (mainRef.current) {
            if(inputRef.current)
            {
                const inputHeight = inputRef.current.style.height;
                inputRef.current.style.position = "sticky";
                inputRef.current.style.top = "0"; // 让 input 置顶
                inputRef.current.style.zIndex = "100"; // 确保不被覆盖
                mainRef.current.style.height = `${screenHeight - headerHeight - inputHeight}px`;
            }else{
                mainRef.current.style.height = `${screenHeight - headerHeight}px`;
            }
        }
    }, [headerHeight, screenHeight, inputRef]);

    return (
        <div ref={mainRef} className={style.main}>
            <CommonInput inputRef={inputRef} onButtonClick={(value)=>{
                performSearch(value);
            }}/>
            <NewsContext.Provider value={{news, error, loading}}>
                <Outlet/>
            </NewsContext.Provider>
        </div>
    );
};

export default News;