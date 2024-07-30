import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavProfileCart = () => {
    return (
        <div className="hidden md:flex gap-x-3 text-[#FF3811] text-3xl">
            <Link to={'/location'}><FaLocationDot />            </Link>
            <Link to={'/carts'}><FaShoppingCart />            </Link>
            <Link to={'/dashboard/profile'}><CgProfile /></Link>

        </div>
    );
};

export default NavProfileCart;