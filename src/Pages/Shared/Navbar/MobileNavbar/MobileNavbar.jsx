import { useState } from "react";
import { FaHome, FaLocationArrow, FaShoppingCart } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { MdPerson4 } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const [active, setActive] = useState(0);

  const menus = [
    { name: "Home", icone: <FaHome />, path: "/" },

    {
      name: "Chat",
      icone: <IoIosChatbubbles />,
      path: "/chat",
    },
    {
      name: "Location",
      icone: <FaLocationArrow />,
      path: "/locaion",
    },
    {
      name: "Cart",
      icone: <FaShoppingCart />,
      path: "/carts",
    },
    {
      name: "Profile",
      icone: <MdPerson4 />,
      path: "/dashboard/profile",
    },
  ];

  return (
    <section className="dark:bg-black bg-white  text-slate-500  max-h-12 container mx-auto rounded-t-[30%]">
      <ul className="flex justify-evenly   relative">
        {menus.map((menu, i) => (
          <li key={i} className="">
            <NavLink to={`${menu.path}`}
              className={"flex flex-col  items-center pt-3 "}
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-2 text-2xl text-[#FF3811] "
                }`}
              >
                {menu.icone}
              </span>
              <span
                className={`${
                  active === i
                    ? "translate-y-0 duration-500  text-[#FF3811] opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                {menu.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MobileNavbar;
