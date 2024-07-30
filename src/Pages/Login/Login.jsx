import { useState } from "react";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { HiMiniLockOpen } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const hanldeSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="md:bg-login-bg bg-cover bg-center min-h-screen  text-white"
    >
        <div className="flex justify-between items-center  bg-black bg-opacity-20 w-full px-6 py-4 md:text-xl ">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 hover:text-[#FF3811]"
        >
          <FaArrowLeft></FaArrowLeft>
        </button>
        <Link to={"/"}>
          {" "}
          <button className="flex items-center gap-2 hover:text-[#FF3811]">
            <FaHome></FaHome> Home
          </button>
        </Link>
      </div>
      <div className="">
        <h2 className="text-center md:text-4xl text-xl font-semibold my-4 ">
          Log in
        </h2>

        <div className="md:w-1/2 md:p-12 p-4  w-11/12 mx-auto bg-transparent backdrop-blur-sm border rounded-md">
          <form onClick={hanldeSubmit} className="">
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="w-full outline-none border-b py-2 px-1 bg-transparent "
                placeholder="your email"
                type="email"
              />
            </div>
            <div className="relative mt-6">
              <label htmlFor="email">Password</label>
              <input
                className="w-full outline-none border-b py-2 px-1 bg-transparent "
                placeholder="your password"
                type={`${showPassword ? "password" : "text"}`}
              />
              <span
                className="absolute right-2 top-1/2 text-2xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <HiLockClosed /> : <HiMiniLockOpen />}
              </span>
            </div>
            <div className="mt-8">
              <input
                type="submit"
                value="Login"
                className="btn-block text-white py-2 rounded-sm hover:bg-[#d31f0b] bg-[#FF3811]"
              />
            </div>
          </form>
          <div className="divider">or</div>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="submit"
              value="Continue With Google "
              className="btn-block text-white py-2 rounded-sm hover:bg-[#d31f0b] bg-[#FF3811]"
            />
            <input
              type="submit"
              value="Continue With Facebook "
              className="btn-block text-white py-2 rounded-sm hover:bg-[#d31f0b] bg-[#FF3811]"
            />
          </div>
          <div className="text-center mt-3">
            <p>New to here ? <Link to={'/signup'}><span className="text-[#ff3811] underline font-semibold">Sign Up</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
