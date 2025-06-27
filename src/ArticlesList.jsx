import './SideMenu.css';
import Articles from './Articles';
import { Link } from 'react-router-dom';
import { articles } from './contexts/articlesContext';
import { useContext } from 'react';

export default function ArticlesList() {
    const articlesCon = useContext(articles)
    let articleList = articlesCon.map((article) => {
        return (
            <Link key={article.id} to={`/articles/${article.id}`}>
                {/* <Articles key={article.id} image={article.image} title={article.title} /> */}
                <Articles key={article.id} image={article.image} title={article.title} />
            </Link>
        )
    });
    return (
        <div className=''>
            {articleList}
        </div>
    )
}