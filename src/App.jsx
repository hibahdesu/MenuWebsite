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
              <Post title={"Classic Pancake"} price={"$4.50"} image="./images/Classic Pancake.png" />
              <Post title={"Pancake & Coffee"} price={"$6.50"} image="./images/Pancake & Coffee.png" />
              <Post title={"Bear Pancake"} price={"$5.50"} image="./images/Bear Pancake.png" /> 
              <Post title={"Fresh sandwich"} price={"$6.00"} image="./images/Fresh sandwich.png" />
              <Post title={"Hot Dog Sandwich"} price={"$4.00"} image="./images/Hot Dog Sandwich.png" />
              <Post title={"Classic Omelet"} price={"$5.50"} image="./images/Classic Omelet.png" />
              <Post title={"Beef Burger"} price={"$7.50"} image="./images/Beef Burger.png" />
              <Post title={"Veggie Burger"} price={"$7.00"} image="./images/Veggie Burger.png" />
              <Post title={"Chicken Burger"} price={"$7.00"} image="./images/Chicken Burger.png" />
              <Post title={"Combo Burger"} price={"$9.00"} image="./images/Combo Burger.png" />
              <Post title={"French Fries"} price={"$3.00"} image="./images/French Fries.png" />
              <Post title={"Beef Taco"} price={"$4.00"} image="./images/Beef Taco.png" />

              <Post title={"Cat Pizza"} price={"$8.00"} image="./images/Cat Pizza.png" />
              <Post title={"Bacon Pizza"} price={"$8.50"} image="./images/Bacon Pizza.png" />
              <Post title={"Vegetarian Pizza"} price={"$8.00"} image="./images/Vegetarian Pizza.png" />
                
              <Post title={"Meat Bao"} price={"$6.50"} image="./images/Meat Bao.png" />
              <Post title={"Sweet Mochi"} price={"$4.00"} image="./images/Sweet Mochi.png" />
              <Post title={"Strawberry Mocha"} price={"$4.00"} image="./images/Strawberry Mocha.png" />
              <Post title={"Classic Cupcake"} price={"$3.00"} image="./images/Classic Cupcake.png" />
              <Post title={"Mocha Cake"} price={"$4.50"} image="./images/Mocha Cake.png" />
              <Post title={"Cherry Cake"} price={"$4.50"} image="./images/Cherry Cake.png" />
              <Post title={"Bear Cake"} price={"$4.50"} image="./images/Bear Cake.png" />
              <Post title={"Cookie Cake"} price={"$4.50"} image="./images/Cookie Cake.png" />
              <Post title={"Biscuit Cake"} price={"$4.50"} image="./images/Biscuit Cake.png" />
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
