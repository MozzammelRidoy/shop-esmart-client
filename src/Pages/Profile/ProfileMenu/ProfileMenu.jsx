import { BiSolidDiscount } from "react-icons/bi";
import { ImHistory } from "react-icons/im";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdDashboardCustomize, MdFavorite } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const isAdmin = true;
  const menus = (
    <>
      {isAdmin && (
        <Link to={"/dashboard"}>
          <li className="border-b py-1 border-[#ff3811] hover:dark:bg-gray-900 hover:bg-gray-300 flex items-center gap-2 justify-center">
            <span>
              <MdDashboardCustomize />
            </span>
            Dashboard
          </li>
        </Link>
      )}
      <Link to={"/profile/myOrder"}>
        {" "}
        <li className="border-b py-1 border-[#ff3811] hover:dark:bg-gray-900 hover:bg-gray-300 flex items-center gap-2 justify-center">
          <span>
            <RiShoppingBasketLine />
          </span>{" "}
          My Order
        </li>
      </Link>
      <Link to={"/profile/myFavorite"}>
        {" "}
        <li className="border-b py-1 border-[#ff3811] hover:dark:bg-gray-900 hover:bg-gray-300 flex items-center gap-2 justify-center">
          <span>
            <MdFavorite />{" "}
          </span>{" "}
          My Favorite
        </li>
      </Link>
      <Link to={"/profile/myCoupons"}>
        {" "}
        <li className="border-b py-1 border-[#ff3811] hover:dark:bg-gray-900 hover:bg-gray-300 flex items-center gap-2 justify-center">
          {" "}
          <span>
            <BiSolidDiscount />{" "}
          </span>
          My Coupons
        </li>
      </Link>
      <Link to={"/profile/OrderTraking"}>
        {" "}
        <li className="border-b py-1 border-[#ff3811] hover:dark:bg-gray-900 hover:bg-gray-300 flex items-center gap-2 justify-center">
          <span>
            <IoAnalyticsOutline />
          </span>{" "}
          Order Tracking
        </li>
      </Link>
      <Link to={"/profile/OrderHistory"}>
        {" "}
        <li className="border-b py-1  border-[#ff3811] hover:dark:bg-gray-900 hover:bg-gray-300 flex items-center gap-2  justify-center ">
          {" "}
          <span>
            <ImHistory />{" "}
          </span>
          Order History
        </li>
      </Link>
    </>
  );

  return (
    <div className="my-4">
      <ul className="md:text-lg text-base  bg-gray-100 dark:bg-gray-700 p-3 ">
        {menus}
      </ul>
    </div>
  );
};

export default ProfileMenu;
