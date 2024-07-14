import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavProfileCart = () => {
    return (
        <div className="hidden md:flex gap-x-3 text-[#FF3811] text-4xl">
            <Link to={'/dashboard/carts'}><FaShoppingCart />            </Link>
            <Link to={'/dashboard/profile'}><CgProfile /></Link>

        </div>
    );
};

export default NavProfileCart;