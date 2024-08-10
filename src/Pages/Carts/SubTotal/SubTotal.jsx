import { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoMdReturnRight } from "react-icons/io";

const SubTotal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Add Shipping Charge");
  const [currentValue, setCurrentValue] = useState(0); 

  const dropDownRef = useRef(null);

  const options = [
    { value: "70", label: "Inside Dhaka 70 tk" },
    { value: "150", label: "Outside Dhaka 150 tk" },
    { value: "00", label: "Office Delivery" },
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

    setCurrentValue(option.value);
    console.log({ target: { value: option.value } });
  };

  const handleCupponSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.cuppon.value);
  };
  return (
    <div className="md:w-[25%] mt-3 md:mt-0 w-full flex flex-col h-full space-y-3 bg-gray-200 dark:bg-gray-700 p-4 md:p-6">
      <h2 className="text-xl md:text-2xl">Summery</h2>
      <div className="space-y-3 flex-grow">
        {/* Deliver Charge Include  */}
        <div ref={dropDownRef} className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full text-left py-1 ps-3 pe-8 text-sm md:text-lg  border border-black dark:border-white  rounded-sm outline-none"
          >
            {selected}
          </button>
          <span className="absolute md:text-2xl pointer-events-none right-1 md:inset-y-2 text-[#ff3811] inset-y-[5px]">
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

        {/* apply Cuppon  */}
        <div>
          <form className="relative" onSubmit={handleCupponSubmit}>
            <label className="" htmlFor="cuppon">
              Apply Cuppon
            </label>
            <input
              type="text"
              name="cuppon"
              className="w-full mt-2 px-2 py-1 outline-none rounded-sm"
              placeholder="Enter Cuppon Code"
            />
            <button className="absolute text-2xl right-1 font-bold z-10 top-9 text-[#ff3811]">
              <IoMdReturnRight />{" "}
            </button>
          </form>
        </div>

        {/* sub total  */}
        <div className="flex-grow">
            <div className="divider"></div>
            <div className="flex justify-between items-center">
                <span>Items</span>
                <span>1 pcs</span>
            </div>
            <div className="flex justify-between items-center">
                <span>Shipping</span>
                <span>{currentValue} tk</span>
            </div>
            <div className="flex justify-between items-center">
                <span>Discout</span>
                <span>00 tk</span>
            </div>
            <div className="flex justify-between items-center">
                <span>Sub Total</span>
                <span>1200 tk</span>
            </div>



        </div>


          {/* checkout button  */}
        <div className="">
            <div className="divider"></div>

          <button className="btn-block bg-[#ff3811] py-1 text-center text-white hover:bg-red-600 outline-none">Check Out</button>

        </div>
      </div>
    </div>
  );
};

export default SubTotal;
