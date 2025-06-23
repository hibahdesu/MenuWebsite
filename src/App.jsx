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
  // const articlesData = [
  //       {
  //           id: 1,
  //           title: "Craving Pizza? These Slices Speak for Themselves",
  //           image: "./images/article1.png"
  //       },
  //       {
  //           id: 2,
  //           title: "Pasta Lovers Rejoice: Saucy Goodness Awaits",
  //           image: "./images/pasta.png"
  //       },
  //       {
  //           id: 3,
  //           title: "Burgers Built Better – From Bun to Bite",
  //           image: "./images/burger.png"
  //       },
  //       {
  //           id: 4,
  //           title: "From Our Kitchen to Your Table: The Story Behind the Menu",
  //           image: "./images/story.png"
  //       },
  //       {
  //           id: 5,
  //           title: "How We Craft Each Dish with Care",
  //           image: "./images/dish.png"
  //       },
  //       {
  //           id: 6,
  //           title: "Sweet Endings: Desserts Worth Drooling Over",
  //           image: "./images/dessert.png"
  //       },
  //       {
  //           id: 7,
  //           title: "Summer Bites & Cool Sips: Refreshing Menu Updates",
  //           image: "./images/menu.png"
  //       }
  //   ];


  const articlesData = [
  {
    id: 1,
    title: "Craving Pizza? These Slices Speak for Themselves",
    image: "./images/article1.png",
    content: `There’s something universally satisfying about pizza. Whether it's a quick bite on a busy evening or the centerpiece of a cozy night in, pizza hits the spot every time. At our kitchen, we believe pizza is more than dough, sauce, and cheese — it's a canvas. We hand-stretch every crust, simmer our tomato sauce for hours, and top it with fresh, local ingredients.

    From classic margherita to daring BBQ chicken with caramelized onions, our menu covers all your cravings. Try our new truffle mushroom flatbread or build your own with over 30 toppings. Each slice speaks volumes about our passion for good food.`
  },
  {
    id: 2,
    title: "Pasta Lovers Rejoice: Saucy Goodness Awaits",
    image: "./images/pasta.png",
    content: `Few things in life are as comforting as a bowl of pasta. At our restaurant, we go beyond ordinary noodles and sauces. We craft each pasta dish with heart — from our hand-rolled fettuccine to our slow-cooked ragu.

    Highlights from our pasta menu include the velvety carbonara made with organic eggs and pancetta, the seafood linguine with garlic white wine sauce, and our baked ziti oozing with mozzarella and house ricotta. Whether you’re vegan, gluten-free, or a cheese lover, our pasta offerings have something for everyone.`
  },
  {
    id: 3,
    title: "Burgers Built Better – From Bun to Bite",
    image: "./images/burger.png",
    content: `We believe burgers should be bold, flavorful, and unforgettable. That’s why every burger we serve starts with 100% grass-fed beef or seasoned plant-based patties, grilled to perfection.

    Our signature "Smash Stack" burger features double patties, aged cheddar, crispy onions, and a secret sauce you'll want to bottle. Add a side of garlic truffle fries and you’ve got a meal worth writing home about. We also offer build-your-own options, so you can create your ideal burger with toppings like jalapeños, avocado, or sunny-side eggs.`
  },
  {
    id: 4,
    title: "From Our Kitchen to Your Table: The Story Behind the Menu",
    image: "./images/story.png",
    content: `Every dish on our menu has a backstory. Some are inspired by grandma’s recipes, others by culinary adventures around the world. Our kitchen team has spent years refining flavors, sourcing local ingredients, and ensuring each meal tells a story.

    Our goal has always been to create a space where tradition meets innovation. You’ll find familiar dishes with a modern twist — like chicken and waffles made with harissa honey or our Mediterranean bowl with za’atar-roasted veggies. Join us and become a part of our ongoing food journey.`
  },
  {
    id: 5,
    title: "How We Craft Each Dish with Care",
    image: "./images/dish.png",
    content: `We don’t just cook food — we craft experiences. Our chefs treat every plate like a piece of art. From prepping fresh herbs to plating with precision, each detail matters. We believe diners can taste the difference when food is made with mindfulness and love.

    Our slow-braised meats, fresh-made stocks, and seasonal sides are just a few examples of our culinary care. No shortcuts, no frozen substitutes — only scratch cooking and honest flavors. It's how we honor both the ingredients and our guests.`
  },
  {
    id: 6,
    title: "Sweet Endings: Desserts Worth Drooling Over",
    image: "./images/dessert.png",
    content: `Life is short — eat dessert first (or last). Our pastry chefs are obsessed with creating indulgent treats that delight and surprise. From classic crème brûlée to our rotating cake of the week, there’s always something sweet waiting for you.

    Don’t miss our signature molten chocolate lava cake served warm with vanilla bean ice cream, or our seasonal fruit tart with a buttery almond crust. Whether you’re celebrating or just satisfying a craving, our desserts are the perfect finale.`
  },
  {
    id: 7,
    title: "Summer Bites & Cool Sips: Refreshing Menu Updates",
    image: "./images/menu.png",
    content: `Summer is the season for light flavors and vibrant plates. Our seasonal menu brings you dishes that are crisp, cool, and colorful. Think heirloom tomato salads, grilled corn with lime crema, and watermelon-feta skewers.

    Pair it with a refreshing drink from our bar — like cucumber mint lemonade, strawberry iced tea, or our house-made sangria. We’re also introducing tropical dessert specials like mango sorbet and coconut panna cotta. Whether you’re dining on the patio or taking it to-go, summer has never tasted better.`
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
