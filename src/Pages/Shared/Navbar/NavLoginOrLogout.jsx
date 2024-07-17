import { Link } from "react-router-dom";

const NavLoginOrLogout = () => {
  // const {user} = useAuth()
  return (
    <div>
      {/* <div>
                <button className="bg-[#FF3811] hover:bg-[#ca1e0b] md:px-6 px-4 md:font-semibold md:py-2 py-1 md:hover:text-white text-white rounded-md  ">Log out</button>
            </div> */}

      {/* or */}

      <div className="flex items-center gap-x-1">
        <Link to={"/login"}>
          <button className="md:bg-[#FF3811] text-lg md:text-base text-[#FF3811] hover:text-[#ca1e0b] md:hover:text-white md:text-white md:hover:bg-[#ca1e0b] md:px-6  md:font-semibold md:py-2 rounded-md ">
            Log in
          </button>
        </Link>
        <div className=" text-xs md:text-2xl text-[#FF3811]">|</div>
        <Link to={"/signup"}>
          <button className="md:bg-[#FF3811] text-lg md:text-base text-[#FF3811] hover:text-[#ca1e0b] md:hover:text-white md:text-white md:hover:bg-[#ca1e0b] md:px-6  md:font-semibold md:py-2 rounded-md ">
           Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavLoginOrLogout;
