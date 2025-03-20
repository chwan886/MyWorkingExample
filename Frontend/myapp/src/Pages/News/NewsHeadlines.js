import { useContext } from "react";
import style from "./css/News.module.css";
import { NewsContext } from "./NewsMain";

const NewsHeadlines = ()=>{
    const {news, error, loading} = useContext(NewsContext);

    return (
        <div className={style.HeadlineMain}>
            {loading ? (
                <p>Loading news...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className={style.newsContainer}>
                    {news.map((article, index) => (
                        <div key={index} className={style.newsItem}>
                            <img src={article.urlToImage} alt={article.title} className={style.newsImage} />
                            <div className={style.newsContent}>
                                <h3 className={style.newsTitle}>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                                        {article.title}
                                    </a>
                                </h3>
                                <p className={style.newsDescription}>{article.description}</p>
                                <p className={style.newsAuthor}>
                                    <strong>{article.source.name}</strong> - {new Date(article.publishedAt).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default NewsHeadlines;