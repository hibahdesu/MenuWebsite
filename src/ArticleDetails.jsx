import './ArticleDetails.css';
import './Main.css';
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { articles } from "./contexts/articlesContext";
import Title from "./Title";

export default function ArticleDetails() {
    const articlesCon = useContext(articles);
    const { articleId } = useParams();
    const article = articlesCon.find((a) => a.id === Number(articleId));

    if (!article) return <p>Article not found.</p>;

    return (
        <article className="article-details wrapper">
            <div className="article-hero-image">
                <img src={article.bg} alt={article.alt} />
            </div>

            <div className="article-content-container">
                <Title title={article.title} />
                <div className="article-body">
                    <p>{article.content}</p>
                </div>
            </div>
        </article>
    );
}
