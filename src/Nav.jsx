import logo from './logo.svg';
import './Nav.css';


function Nav() {
  return (
    <div className='header'>
      <img src={logo} className="App-logo" alt="logo" />  
      <nav>
        <ul>
          <li><a href="#home">Menu</a></li>
          <li><a href="#about">Our Story</a></li>
          <li><a href="#contact">Ask Us</a></li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;