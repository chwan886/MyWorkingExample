import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import urls from "../../res/urls";
import style from './css/EnglishStudy.module.css'

const Grammars = () => {

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(urls.GRAMMARS)  // 👈 这里换成你的 Markdown 地址
            .then(response => response.text())
            .then(text => setMarkdown(text))
            .catch(error => console.error("Error fetching Markdown:", error));
    }, []);

    return (
        <div className={style.grammar_main}>
            <div className={style.markdown_body}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Grammars;