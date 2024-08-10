import FilterDropdown from "./FilterBy";
import RangeMinToMax from "./RangeMinToMax";

const RangeAndFilter = () => {
    return (
        <div className="flex justify-between items-start gap-1 mx-1 md:mx-2">
            <RangeMinToMax></RangeMinToMax>
            <FilterDropdown></FilterDropdown>
        </div>
    );
};

export default RangeAndFilter;