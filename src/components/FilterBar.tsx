import { Filter, FilterBarProps } from "../types/types";
import { SFilterBar, FilterButton } from "../styles/AllStyles.styles";

const FilterBar = ({ filter, setFilter }: FilterBarProps) => {
  return (
    <SFilterBar>
      <FilterButton
        $isActive={filter === Filter.All}
        onClick={() => setFilter(Filter.All)}
      >
        All Todos
      </FilterButton>
      <FilterButton
        $isActive={filter === Filter.Active}
        onClick={() => setFilter(Filter.Active)}
      >
        Active Todos
      </FilterButton>
      <FilterButton
        $isActive={filter === Filter.Completed}
        onClick={() => setFilter(Filter.Completed)}
      >
        Completed Todos
      </FilterButton>
    </SFilterBar>
  );
};

export default FilterBar;
