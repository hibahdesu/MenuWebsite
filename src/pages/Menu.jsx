import FilterButtons from "../FilterButtons";
import PostsAndSidemnu from "../PostsAndSidemnu";

export default function Menu() {
    return (
        <div>
            <FilterButtons
                          filters={['All', 'Breakfast', 'Lunch', 'Dinner']} 
                          setFilter={(filter) => console.log(`Filter set to: ${filter}`)}
                        />
            <PostsAndSidemnu />
        </div>
    );
}