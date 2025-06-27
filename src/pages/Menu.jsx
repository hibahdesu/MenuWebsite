import FilterButtons from "../FilterButtons";
import '../Main.css'
import Post from "../Post";
import Title from "../Title";


export default function Menu() {
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
        <div className="wrapper">
            <FilterButtons
                filters={['All', 'Breakfast', 'Lunch', 'Dinner']} 
                setFilter={(filter) => console.log(`Filter set to: ${filter}`)}
            />
            <div className=''>
                <Title title={"All items"} />
                <div className='posts'>
                    {postsList}
                </div>
            </div>
        </div>
    );
}