import './Nav.css';


function Nav() {
  return (
    <div className='header'>
      <div className="logo">
        <img src={"./images/logo.png"} className="App-logo" alt="logo" />
        <h1 className='logo-text'>RestLife</h1>
      </div>
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