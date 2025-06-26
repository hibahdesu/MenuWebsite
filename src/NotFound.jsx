import './NotFound.css';
import { Link } from 'react-router-dom';
export default function NotFound() {
    return (
        <div>
            <h1>$04 Page Not Found</h1>
            <Link to={'/'}>
             <button>Return to the Home page</button>
             </Link>
           
        </div>
    )
}