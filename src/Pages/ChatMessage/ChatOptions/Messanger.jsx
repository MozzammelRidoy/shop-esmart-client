import { FaFacebookMessenger } from "react-icons/fa";
import { Link } from "react-router-dom";

const Messanger = () => {
  return (
    <Link
      to="https://m.me/MozzammelRidoyAR/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-nowrap gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-md"
    >
      <FaFacebookMessenger size={24} />
      <span className="text-lg font-semibold">Chat on Messenger</span>
    </Link>
  );
};

export default Messanger;
