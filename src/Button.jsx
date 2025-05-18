import './Button.css';


export default function Button({text}) {
    // const { text } = props;
    return (
        // <button className='side-menu-button' onClick={onClick}></button>
        <button className='side-menu-button'>
            {text}
        </button>
    )
}