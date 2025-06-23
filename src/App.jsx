import './Main.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import FilterButtons from './FilterButtons';
import PostsAndSidemnu from './PostsAndSidemnu';
import Footer from './Footer';

import Menu from './pages/Menu';
import OurStory from './pages/OurStory';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>

      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FilterButtons 
              filters={['All', 'Breakfast', 'Lunch', 'Dinner']} 
              setFilter={(filter) => console.log(`Filter set to: ${filter}`)}
            />
            <PostsAndSidemnu />
          </>
        } />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<OurStory />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
