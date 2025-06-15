import './Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={"./images/logo.png"} className="App-logo" alt="logo" />
        <Link to="/" className="logo-text">RestLife</Link>
      </div>

      {/* Toggle Button */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? '✖' : '☰'}
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>Our Story</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Ask Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
