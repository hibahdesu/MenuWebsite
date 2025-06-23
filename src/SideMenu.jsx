import './SideMenu.css';
import Articles from './Articles';

export default function SideMenu() {
    const articles = [
        {
            id: 1,
            title: "Craving Pizza? These Slices Speak for Themselves",
            image: "./images/article1.png"
        },
        {
            id: 2,
            title: "Pasta Lovers Rejoice: Saucy Goodness Awaits",
            image: "./images/pasta.png"
        },
        {
            id: 3,
            title: "Burgers Built Better – From Bun to Bite",
            image: "./images/burger.png"
        },
        {
            id: 4,
            title: "From Our Kitchen to Your Table: The Story Behind the Menu",
            image: "./images/story.png"
        },
        {
            id: 5,
            title: "How We Craft Each Dish with Care",
            image: "./images/dish.png"
        },
        {
            id: 6,
            title: "Sweet Endings: Desserts Worth Drooling Over",
            image: "./images/dessert.png"
        },
        {
            id: 7,
            title: "Summer Bites & Cool Sips: Refreshing Menu Updates",
            image: "./images/menu.png"
        }
    ];

    const articleList = articles.map((article) => {
        return (
            <Articles key={article.id} image={article.image} title={article.title} />
        )
    });
    return (
        <div className='side-menu'>
            {/* <Articles image={"./images/article1.png"} title={"Craving Pizza? These Slices Speak for Themselves"} />
            <Articles image={"./images/article1.png"} title={"Pasta Lovers Rejoice: Saucy Goodness Awaits"} />
            <Articles image={"./images/article1.png"} title={"Burgers Built Better – From Bun to Bite"} />
            <Articles image={"./images/article1.png"} title={"From Our Kitchen to Your Table: The Story Behind the Menu"} />
            <Articles image={"./images/article1.png"} title={"How We Craft Each Dish with Care"} />
            <Articles image={"./images/article1.png"} title={"Sweet Endings: Desserts Worth Drooling Over"} />
            <Articles image={"./images/article1.png"} title={"Summer Bites & Cool Sips: Refreshing Menu Updates"} /> */}
            {articleList}
        </div>
    )
}