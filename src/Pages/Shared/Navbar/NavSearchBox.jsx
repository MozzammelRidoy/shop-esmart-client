import { FaSearch } from "react-icons/fa";

const NavSearchBox = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.searchText.value;
    console.log(searchText);
  };
  return (
    <form onSubmit={handleSearch} className="flex items-center relative">
      <input
        type="text"
        name="searchText"
        className="w-full outline-none border text-black dark:text-white border-[#FF3811] md:py-2 pl-3 md:pl-5 pr-8 md:pr-14 md:text-xl l  py-1 rounded-lg"
        placeholder="Search..."
        id=""
      />
      <button
        type="submit"
        className="md:text-2xl text-[#FF3811] absolute md:right-5 right-2"
      >
        <FaSearch className=""></FaSearch>
      </button>
    </form>
  );
};

export default NavSearchBox;
