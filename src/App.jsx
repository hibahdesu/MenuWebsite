import './Main.css';
import './App.css';
import Nav from './Nav';
import PostsAndSidemnu from './PostsAndSidemnu';
import FilterButtons from './FilterButtons';
import Hero from './Hero';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero /> 
      <FilterButtons 
        filters={['All', 'Breakfast', 'Lunch', 'Dinner']} 
        setFilter={(filter) => console.log(`Filter set to: ${filter}`)}
      />
      <PostsAndSidemnu />

      <Footer />
    </div>
  );
}

export default App;
