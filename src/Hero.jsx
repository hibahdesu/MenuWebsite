import './Main.css';
import './Hero.css';


export default function Hero() {
    return (
        <div className="hero wrapper">
            <h1 className='hero-title'>Welcome to RestLife</h1>
            <img src="./images/hero.png" alt="Hero" className="hero-image" />
        </div>
    );
}