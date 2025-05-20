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
              <Post title={"Recipe 1"} image="./images/1.png" />
              <Post title={"Recipe 2"} image="./images/2.png" />
              <Post title={"Recipe 3"} image="./images/3.png" />
              <Post title={"Recipe 4"} image="./images/4.png" />
              <Post title={"Recipe 5"} image="./images/5.png" />
              <Post title={"Recipe 6"} image="./images/6.png" />
              <Post title={"Recipe 7"} image="./images/7.png" />
              <Post title={"Recipe 8"} image="./images/8.png" />
              <Post title={"Recipe 9"} image="./images/9.png" />  
              <Post title={"Recipe 10"} image="./images/10.png" />
              <Post title={"Recipe 11"} image="./images/11.png" />
              {/* <Post title={"Recipe 12"} image="./images/12.png" /> */}
              <Post title={"Recipe 13"} image="./images/13.png" />
              <Post title={"Recipe 14"} image="./images/14.png" />
              <Post title={"Recipe 15"} image="./images/15.png" />
              <Post title={"Recipe 16"} image="./images/16.png" />
              <Post title={"Recipe 17"} image="./images/17.png" />
              <Post title={"Recipe 18"} image="./images/18.png" />
              <Post title={"Recipe 19"} image="./images/19.png" />
              <Post title={"Recipe 20"} image="./images/20.png" />  
              {/* <Post title={"Recipe 21"} image="./images/21.png" /> */}
              <Post title={"Recipe 22"} image="./images/22.png" />
              <Post title={"Recipe 23"} image="./images/23.png" />
              <Post title={"Recipe 24"} image="./images/24.png" />
              <Post title={"Recipe 25"} image="./images/25.png" />
              <Post title={"Recipe 26"} image="./images/26.png" />
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
