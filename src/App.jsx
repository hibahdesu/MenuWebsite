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
import ArticleDetails from './ArticleDetails';
import { articles } from './contexts/articlesContext';

function App() {
  const articlesData = [
        {
            id: 1,
            title: "Craving Pizza? These Slices Speak for Themselves",
            image: "./images/article1.png"
        },
        {
            id: 2,
            title: "Pasta Lovers Rejoice: Saucy Goodness Awaits",
            image: "./images/pasta.png"
        },
        {
            id: 3,
            title: "Burgers Built Better – From Bun to Bite",
            image: "./images/burger.png"
        },
        {
            id: 4,
            title: "From Our Kitchen to Your Table: The Story Behind the Menu",
            image: "./images/story.png"
        },
        {
            id: 5,
            title: "How We Craft Each Dish with Care",
            image: "./images/dish.png"
        },
        {
            id: 6,
            title: "Sweet Endings: Desserts Worth Drooling Over",
            image: "./images/dessert.png"
        },
        {
            id: 7,
            title: "Summer Bites & Cool Sips: Refreshing Menu Updates",
            image: "./images/menu.png"
        }
    ];

  
  return (
    <>
    <articles.Provider value={articlesData}>
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
        <Route path='/articledetails/:articleId' element={<ArticleDetails />} />
      </Routes>
      <Footer />
      </articles.Provider>
    </>
  );
}

export default App;
