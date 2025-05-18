import './Post.css';
// import logo from './logo.svg';

export default function Post({title, image}) {
    // const { title, image} = props;
    return (
        <div className='post'>
            <img src={image} className="post-image" alt="post-image" />  
            <h2 className='post-title'>
                {title}
            </h2>
        </div>
    )
}