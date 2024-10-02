import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Phone = () => {
  return (
    <Link
      to="tel:+8801580325199"
      className="flex items-center gap-2 text-nowrap bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-md"
    >
      <FaPhoneAlt size={24} />
      <span className="text-lg font-semibold">Call Us</span>
    </Link>
  );
};

export default Phone;
