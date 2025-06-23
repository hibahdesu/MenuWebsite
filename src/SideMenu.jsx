import './SideMenu.css';
import Articles from './Articles';
import { Link } from 'react-router-dom';
import { articles } from './contexts/articlesContext';
import { useContext } from 'react';

export default function SideMenu() {
    const articlesCon = useContext(articles)
    // const articlesData = [
    //     {
    //         id: 1,
    //         title: "Craving Pizza? These Slices Speak for Themselves",
    //         image: "./images/article1.png"
    //     },
    //     {
    //         id: 2,
    //         title: "Pasta Lovers Rejoice: Saucy Goodness Awaits",
    //         image: "./images/pasta.png"
    //     },
    //     {
    //         id: 3,
    //         title: "Burgers Built Better – From Bun to Bite",
    //         image: "./images/burger.png"
    //     },
    //     {
    //         id: 4,
    //         title: "From Our Kitchen to Your Table: The Story Behind the Menu",
    //         image: "./images/story.png"
    //     },
    //     {
    //         id: 5,
    //         title: "How We Craft Each Dish with Care",
    //         image: "./images/dish.png"
    //     },
    //     {
    //         id: 6,
    //         title: "Sweet Endings: Desserts Worth Drooling Over",
    //         image: "./images/dessert.png"
    //     },
    //     {
    //         id: 7,
    //         title: "Summer Bites & Cool Sips: Refreshing Menu Updates",
    //         image: "./images/menu.png"
    //     }
    // ];

    let articleList = articlesCon.map((article) => {
        return (
            <Link key={article.id} to={`/articleDetails/${article.id}`}>
                {/* <Articles key={article.id} image={article.image} title={article.title} /> */}
                <Articles key={article.id} image={article.image} title={article.title} />
            </Link>
        )
    });
    return (
        <div className='side-menu'>
            {articleList}
        </div>
    )
}