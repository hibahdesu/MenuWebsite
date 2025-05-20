import './App.css';
import Nav from './Nav';
// import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Header /> */}

      <div className='recipe-section'>
        {/* Posts and Side Menu */}
        <div className='posts-and-side-menu'>
          {/* Side Menu */}
          <div className='side-menu-container'>
            <Title title={"Articles"} />
            <div className='side-menus'>
            <SideMenu />
            </div>
          </div>
          
          
          {/* Side Menu */}

          {/* Posts*/}
          <div className='posts-container'>
            <Title title={"All items"} />
            <div className='posts'>
              <Post title={"Classic Pancake"} price={"$4.50"} image="./images/1.png" />
              <Post title={"Pancake & Coffee"} price={"$6.50"} image="./images/4.png" />
              <Post title={"Bear Pancake"} price={"$5.50"} image="./images/20.png" /> 
              <Post title={"Fresh sandwich"} price={"$6.00"} image="./images/5.png" />
              <Post title={"Hot Dog Sandwich"} price={"$4.00"} image="./images/22.png" />
              <Post title={"Classic Omelet"} price={"$5.50"} image="./images/Classic Omelet.png" />
              <Post title={"Beef Burger"} price={"$7.50"} image="./images/2.png" />
              <Post title={"Veggie Burger"} price={"$7.00"} image="./images/3.png" />
              <Post title={"Chicken Burger"} price={"$7.00"} image="./images/8.png" />
              <Post title={"Combo Burger"} price={"$9.00"} image="./images/9.png" />
              <Post title={"French Fries"} price={"$3.00"} image="./images/6.png" />
              <Post title={"Beef Taco"} price={"$4.00"} image="./images/7.png" />

              <Post title={"Cat Pizza"} price={"$8.00"} image="./images/23.png" />
              <Post title={"Bacon Pizza"} price={"$8.50"} image="./images/24.png" />
              <Post title={"Vegetarian Pizza"} price={"$8.00"} image="./images/25.png" />
                
              <Post title={"Meat Bao"} price={"$6.50"} image="./images/10.png" />
              <Post title={"Sweet Mochi"} price={"$4.00"} image="./images/11.png" />
              <Post title={"Strawberry Mocha"} price={"$4.00"} image="./images/13.png" />
              <Post title={"Classic Cupcake"} price={"$3.00"} image="./images/19.png" />
              <Post title={"Mocha Cake"} price={"$4.50"} image="./images/14.png" />
              <Post title={"Cherry Cake"} price={"$4.50"} image="./images/15.png" />
              <Post title={"Bear Cake"} price={"$4.50"} image="./images/16.png" />
              <Post title={"Cookie Cake"} price={"$4.50"} image="./images/17.png" />
              <Post title={"Biscuit Cake"} price={"$4.50"} image="./images/18.png" />
                             
              
            </div>
          </div>
          

        </div>
        {/* Posts and Side Menu */}
      </div>

      

      
      
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
