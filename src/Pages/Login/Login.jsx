import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiLockClosed } from "react-icons/hi";
import { HiMiniLockOpen } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import GoogleLogin from "../../Component/SocialLogin/GoogleLogin/GoogleLogin";
import FacebookLogin from "../../Component/SocialLogin/FacebookLogin/FacebookLogin";

const Login = () => {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = (data) => {
    
    console.log(data)
  
  }
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="md:bg-login-bg bg-cover bg-center min-h-screen  dark:text-white text-black md:text-white"
    >
      <Navbar></Navbar>
      
      <div className="">
        <h2 className="text-center md:text-4xl text-xl font-semibold my-4 ">
          Log in
        </h2>

        <div className="md:w-1/2 md:p-12 p-4  w-11/12 mx-auto shadow-xl md:shadow-none md:bg-transparent md:backdrop-blur-md border rounded-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
            <div className="relative">
              <label htmlFor="email">Email</label>
              <input
                className="w-full outline-none border-b py-2 px-1 bg-transparent "
                placeholder="your email"
                type="email" 
                {...register('email', {required : true})}
              />
              {errors.email && <span className="tooltip tooltip-open tooltip-right tooltip-error absolute left-14 top-3" data-tip={'Email Required'}></span>}
            </div>
            <div className="relative ">
              <label htmlFor="email">Password</label>
              <input
                className="w-full outline-none border-b py-2 px-1 bg-transparent "
                placeholder="your password"
                type={`${showPassword ? "password" : "text"}`}
                {...register('password',{required : true})}
              />
              {errors.password && <span className="tooltip tooltip-open tooltip-right tooltip-error absolute left-20 top-3" data-tip={'Password Required'}></span>}
              <span
                className="absolute right-2 top-1/2 text-2xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <HiLockClosed /> : <HiMiniLockOpen />}
              </span>
            </div>
            <div className="mt-2">
              <input
                type="submit"
                value="Login"
                className="btn-block text-white py-2 rounded-sm hover:bg-[#d31f0b] bg-[#FF3811]"
              />
            </div>
          </form>
          <div className="divider">or</div>
          <div className="grid md:grid-cols-2 gap-4">
            <GoogleLogin></GoogleLogin>
            <FacebookLogin></FacebookLogin>
          </div>
          <div className="text-center mt-3">
            <p>
              New to here ?{" "}
              <Link to={"/signup"}>
                <span className="text-[#ff3811] underline font-semibold">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
