import './Post.css';

export default function Post({title, price, image}) {
    // const { title, image} = props;
    return (
        <div className='post'>
            <img src={image} className="post-image" alt="post-image" />  
            <h2 className='post-title'>
                {title}
            </h2>
            <p className='post-price'>
                {price}
            </p>
        </div>
    )
}