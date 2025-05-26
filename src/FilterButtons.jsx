import FilterButton from "./FilterButton";

export default function FilterButtons({ filters, setFilter }) {
    
    return (
        <div className="filter-buttons">
            {filters.map((filter, index) => (
                <FilterButton
                    key={index}
                    filter={filter}
                    setFilter={setFilter}
                />
            ))}
        </div>
    );
}