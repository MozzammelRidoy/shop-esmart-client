import { FaSearch } from "react-icons/fa";

const NavSearchBox = () => {
    return (
        <form className="flex items-center relative">
        <input type="text" name="searchText" className="w-full outline-none border border-[#FF3811] md:py-2 pl-3 md:pl-5 pr-8 md:pr-14 md:text-xl l  py-1 rounded-lg" placeholder="Search..." id="" />
        <button type="submit" className="md:text-2xl text-[#FF3811] absolute md:right-5 right-2"><FaSearch className=""></FaSearch></button>
    </form>
    );
};

export default NavSearchBox;