import './Main.css';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function Footer() {
    return (
        <footer className="footer wrapper">
            <div className="footer-content">
                <ul className="social-links">
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <XIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </a>
                    </li>
                </ul>
                <div className='footer-notes'>
                    <p>&copy; 2025 Pancake RestLife. All rights reserved.</p>
                    <p className="footer-note">Made and Designed with ❤️ by Hibah Sindi</p>
                </div>
                
            </div>
        </footer>
    );
}