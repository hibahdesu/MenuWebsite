import { useParams } from "react-router-dom";
import { useContext } from "react";
import { articles } from "./contexts/articlesContext"

export default function ArticleDetails() {
    const articlesCon = useContext(articles);
    const { articleId } = useParams();
    // console.log(articleId);

    const article = articlesCon.find((a) => a.id === Number(articleId));

    console.log(article);
    

    return (
        <>
        <h1>Article Details Page</h1>
        <h1>{ article.title }</h1>
        <p>{ article.image}</p>
        </>
    )
}