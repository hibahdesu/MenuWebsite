import './Articles.css';
// import Button from './Button';

export default function Articles({image, title}) {
    return (
        <div className='articles'>
            <div className='article-image-container'>
                 <img src={image} className="article-image" alt="article" />  
            </div>
            <div>
                <p className='article-title'> {title} </p>
                {/* <Button text="Read More" /> */}
            </div>
        </div>
    )
}