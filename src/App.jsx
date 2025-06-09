import './App.css';
import Nav from './Nav';
// import Header from './Header';
// import Post from './Post';
// import SideMenu from './SideMenu';
// import Title from './Title';
import PostsAndSidemnu from './PostsAndSidemnu';
import FilterButtons from './FilterButtons';
import Form from './Form';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Header /> */}
      <Hero /> 
      <FilterButtons 
        filters={['All', 'Breakfast', 'Lunch', 'Dinner']} 
        setFilter={(filter) => console.log(`Filter set to: ${filter}`)}
      />
      <PostsAndSidemnu />

      <Form />
    </div>
  );
}

export default App;
