import { useParams } from "react-router-dom";
import { useContext } from "react";
import { articles } from "./contexts/articlesContext"
import Title from "./Title";

export default function ArticleDetails() {
    const articlesCon = useContext(articles);
    const { articleId } = useParams();
    // console.log(articleId);

    const article = articlesCon.find((a) => a.id === Number(articleId));

    console.log(article);
    

    return (
        <div>
        <h1>Article Details Page</h1>
        <Title title={ article.title }/>
        <img src={article.image} alt="" className="detail-img"/>
        <p> {article.content}</p>
        </div>
    )
}