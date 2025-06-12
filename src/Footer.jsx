import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="social-links">
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
                <div className='footer-notes'>
                    <p>&copy; 2025 Pancake RestLife. All rights reserved.</p>
                    <p className="footer-note">Made and Designed with ❤️ by Hibah Sindi</p>
                </div>
                
            </div>
        </footer>
    );
}