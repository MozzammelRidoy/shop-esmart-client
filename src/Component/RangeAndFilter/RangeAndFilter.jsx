import FilterDropdown from "./FilterBy";
import RangeMinToMax from "./RangeMinToMax";

const RangeAndFilter = () => {
    return (
        <div className="flex justify-between items-start mx-2">
            <RangeMinToMax></RangeMinToMax>
            <FilterDropdown></FilterDropdown>
        </div>
    );
};

export default RangeAndFilter;