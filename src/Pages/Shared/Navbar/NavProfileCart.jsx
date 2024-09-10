import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useCarts from "../../../hooks/useCarts";

const NavProfileCart = () => {
    const {carts} = useCarts(); 

    return (
        <div className="hidden md:flex gap-x-3 text-[#FF3811] text-3xl">
            <Link to={'/location'}><FaLocationDot />            </Link>
            <Link className="relative" to={'/carts'}><span ><FaShoppingCart /> </span>   {carts.length > 0 && <span className="text-sm font-bold text-white top-0 left-[9px] absolute">+{carts.length}</span> }         </Link>
            <Link to={'/dashboard/profile'}><CgProfile /></Link>

        </div>
    );
};

export default NavProfileCart;