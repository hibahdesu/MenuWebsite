import './Main.css'
import './PostsAndSidemnu.css'
import Post from './Post';
import SideMenu from './SideMenu';
import Title from './Title';


export default function PostsAndSidemnu() {
    const posts = [
        {
            id: 1,
            title: "Classic Pancake",
            price: "$4.50",
            image: "./images/Classic Pancake.png"
        },
        {
            id: 2,
            title: "Pancake & Coffee",
            price: "$6.50",
            image: "./images/Pancake & Coffee.png"
        },
        {
            id: 3,
            title: "Bear Pancake",
            price: "$5.50",
            image: "./images/Bear Pancake.png"
        },
        {
            id: 4,
            title: "Fresh sandwich",
            price: "$6.00",
            image: "./images/Fresh sandwich.png"
        },
        {
            id: 5,
            title: "Hot Dog Sandwich",
            price: "$4.00",
            image: "./images/Hot Dog Sandwich.png"
        },
        {
            id: 6,
            title: "Classic Omelet",
            price: "$5.50",
            image: "./images/Classic Omelet.png"
        },
        {
            id: 7,
            title: "Beef Burger",
            price: "$7.50",
            image: "./images/Beef Burger.png"
        },
        {
            id: 8,
            title: "Veggie Burger",
            price: "$7.00",
            image: "./images/Veggie Burger.png"
        },
        {
            id: 9,
            title: "Chicken Burger",
            price: "$7.00",
            image: "./images/Chicken Burger.png"
        },
        {
            id: 10,
            title: "Combo Burger",
            price: "$9.00",
            image: "./images/Combo Burger.png"
        },
        {
            id: 11,
            title: "French Fries",
            price: "$3.00",
            image: "./images/French Fries.png"
        },
        {
            id: 12,
            title: "Beef Taco",
            price: "$4.00",
            image: "./images/Beef Taco.png"
        },
        {
          id: 13,
          title: "Cat Pizza",
          price: "$8.00",
          image: "./images/Cat Pizza.png"
        },
        {
          id: 14,
          title: "Bacon Pizza",
          price: "$8.50",
          image: "./images/Bacon Pizza.png"
        },
        {
          id: 15,
          title: "Vegetarian Pizza",
          price: "$8.00",
          image: "./images/Vegetarian Pizza.png"
        },
        {
            id: 16,
            title: "Meat Bao",
            price: "$6.50",
            image: "./images/Meat Bao.png"
        },
        {
            id: 17,
            title: "Sweet Mochi",
            price: "$4.00",
            image: "./images/Sweet Mochi.png"
        },
        {
            id: 18,
            title: "Strawberry Mocha",
            price: "$4.00",
            image: "./images/Strawberry Mocha.png"
        },
        {
            id: 19,
            title: "Classic Cupcake",
            price: "$3.00",
            image: "./images/Classic Cupcake.png"
        },
        {
            id: 20,
            title: "Mocha Cake",
            price: "$4.50",
            image: "./images/Mocha Cake.png"
        },
        {
            id: 21,
            title: "Cherry Cake",
            price: "$4.50",
            image: "./images/Cherry Cake.png"
        },
        {
            id: 22,
            title: "Bear Cake",
            price: "$4.50",
            image: "./images/Bear Cake.png"
        },
        {
          id: 23,
          title: "Cookie Cake",
          price: "$4.50",
          image: "./images/Cookie Cake.png"
        },
        {
          id: 24,
          title: "Biscuit Cake",
          price: "$4.50",
          image: "./images/Biscuit Cake.png"
        }
    ];

    const postsList = posts.map((post) => (
        <Post
            key={post.id}
            title={post.title}
            price={post.price}
            image={post.image}
        />
    ));
        
    return (
        <div className='recipe-section wrapper'>
        {/* Posts and Side Menu */}
        <div className='posts-and-side-menu'>
          {/* Posts*/}
          <div className='posts-container'>
            <Title title={"Most selling items"} />
            <div className='posts'>
                {postsList}
              {/* <Post title={"Classic Pancake"} price={"$4.50"} image="./images/Classic Pancake.png" />
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
              <Post title={"Biscuit Cake"} price={"$4.50"} image="./images/Biscuit Cake.png" /> */}
            </div>
          </div>

           {/* Side Menu */}
          <div className='side-menu-container'>
            <Title title={"Articles"} />
            <div className='side-menus'>
            <SideMenu />
            </div>
          </div>
          {/* Side Menu */}
          

        </div>
        {/* Posts and Side Menu */}
      </div>
    );
}