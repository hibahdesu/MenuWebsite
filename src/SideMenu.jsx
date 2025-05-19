import './SideMenu.css';
// import Button from './Button';
import Articles from './Articles';

export default function SideMenu() {
    return (
        <div className='side-menu'>
            <Articles image={"./images/article1.png"} title={"Craving Pizza? These Slices Speak for Themselves"} />
            <Articles image={"./images/article1.png"} title={"Pasta Lovers Rejoice: Saucy Goodness Awaits"} />
            <Articles image={"./images/article1.png"} title={"Burgers Built Better – From Bun to Bite"} />
            <Articles image={"./images/article1.png"} title={"From Our Kitchen to Your Table: The Story Behind the Menu"} />
            <Articles image={"./images/article1.png"} title={"How We Craft Each Dish with Care"} />
            <Articles image={"./images/article1.png"} title={"Sweet Endings: Desserts Worth Drooling Over"} />
            <Articles image={"./images/article1.png"} title={"Summer Bites & Cool Sips: Refreshing Menu Updates"} />
        </div>
    )
}