import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Whatsapp = () => {
  return (
    <Link
      to="https://wa.me/8801889816198"
      target="_blank"
      rel="noopener noreferrer"
      className="flex text-nowrap items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-md"
    >
      <FaWhatsapp size={24} />
      <span className="text-lg font-semibold">Chat on WhatsApp</span>
    </Link>
  );
};

export default Whatsapp;
