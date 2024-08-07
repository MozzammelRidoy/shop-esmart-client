import { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Option");
  const dropDownRef = useRef(null);

  const options = [
    { value: "price_asc", label: "Price Low To High" },
    { value: "price_desc", label: "Price High To Low" },
    { value: "alpha_asc", label: "A to Z" },
    { value: "alpha_desc", label: "Z to A" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    //cleanup func
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef, isOpen]);

  const handleOptionSelect = (option) => {
    setSelected(option.label);
    setIsOpen(false);

    console.log({ target: { value: option.value } });
  };

  return (
    <div data-aos='fade-left' data-aos-duration="1500" ref={dropDownRef} className="md:w-52 w-40">
      <h3 className="text-base md:text-xl">Filter by</h3>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left md:py-1 py-[1px] ps-3 pe-8 text-sm md:text-lg  border  rounded-sm outline-none"
        >
          {selected}
        </button>
        <span className="absolute md:text-2xl pointer-events-none right-1 md:inset-y-2 text-[#ff3811] inset-y-1">
          {isOpen ? <FaCaretUp /> : <FaCaretDown />}
        </span>

        {isOpen && (
          <div
            data-aos="zoom-out"
            data-aos-duration="800"
            className="absolute bg-gray-100 text-black w-full rounded-b-sm z-10"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className=" hover:text-white w-full text-left hover:bg-[#ff3811] text-sm md:text-lg  md:ps-3 py-1 ps-3"
              >
                {" "}
                {option.label}{" "}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterDropdown;

{
  /* <select defaultValue={'selected'}
          onClick={() => setDown(!down)}
          onChange={handleFilter}
          className=" md:py-1 py-[1px] ps-3 pe-8 text-sm md:text-lg appearance-none border rounded-md outline-none cursor-pointer"
        >
          <option value={'selected'} disabled>
            Select option
          </option>
          <option value={"des"}>Price High To Low</option>
          <option value={"asc"}>Price Low To High</option>
        </select> */
}
