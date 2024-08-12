import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiLockClosed } from "react-icons/hi";
import { HiMiniLockOpen } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import GoogleLogin from "../../Component/SocialLogin/GoogleLogin/GoogleLogin";
import FacebookLogin from "../../Component/SocialLogin/FacebookLogin/FacebookLogin";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const passwordValidation = (password) => {
    return {
      length: password.length >= 8,
      uppercase: /^(?=.*[A-Z])/.test(password),
      lowercase: /^(?=.*[a-z])/.test(password),
      number: /^(?=.*\d)/.test(password),
      specialChar: /^(?=.*[@$!%*?&#])/.test(password),
    };
  };
  const validationStatus = passwordValidation(password);
  const isValid = Object.values(validationStatus).every(Boolean);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="md:bg-signup-bg bg-cover bg-center  dark:text-white text-black md:text-white"
    >
      <Navbar></Navbar>

      <div className="md:min-h-screen">
        <h2 className="text-center md:text-4xl text-xl font-semibold my-4 text-white">
          Sing UP
        </h2>
        <div className="md:w-1/2 md:p-12 p-4  w-11/12 mx-auto bg-transparent backdrop-blur-md shadow-xl md:shadow-none border rounded-md">
          <form
            noValidate
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative">
              <label htmlFor="name">Name</label>
              <input
                className="w-full outline-none border-b py-2 px-1 bg-transparent "
                placeholder="your name"
                type="text"
                name="name"
                {...register("name", {
                  required: "Name cannot be empty",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "Name can only contain letters and spaces",
                  },
                })}
              />
              {errors.name && (
                <span
                  className="tooltip tooltip-open tooltip-right tooltip-error absolute left-14 top-3"
                  data-tip={errors.name.message}
                ></span>
              )}
            </div>
            <div className="relative">
              <label htmlFor="email ">Email</label>
              <input
                className="w-full outline-none border-b py-2 px-1 bg-transparent "
                placeholder="your email"
                type="email"
                name="email"
                {...register("email", {
                  required: "Email cannot be empty",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <span
                  className="tooltip tooltip-open tooltip-right tooltip-error absolute left-14 top-3"
                  data-tip={errors.email.message}
                ></span>
              )}
            </div>
            <div className="relative">
              <label htmlFor="email">Password</label>
              <input
                className="w-full outline-none border-b py-2 px-1 bg-transparent "
                placeholder="your password"
                type={`${showPassword ? "password" : "text"}`}
                name="password"
                {...register("password", {
                  required: "Password cannot be empty",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                    message: "Password is not perfect",
                  },

                  onChange: (e) => setPassword(e.target.value),
                })}
              />
              <span
                className="absolute right-2 top-1/2 text-2xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <HiLockClosed /> : <HiMiniLockOpen />}
              </span>

              {errors.password && (
                <span
                  className="tooltip tooltip-open tooltip-right tooltip-error absolute left-20 top-3"
                  data-tip={errors.password.message}
                ></span>
              )}

              {password && !isValid && errors.password && (
                <div className="absolute bg-white md:w-1/2 md:left-1/4 mt-2 rounded-sm p-4 mx-auto text-black">
                  <h3 className="text-sm">
                    Password must meet the following requirements :
                  </h3>
                  <ul>
                    <li
                      className={
                        validationStatus.lowercase
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {" "}
                      {validationStatus.lowercase ? "✔" : "✖"} At least one
                      letter
                    </li>
                    <li
                      className={
                        validationStatus.uppercase
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {" "}
                      {validationStatus.uppercase ? "✔" : "✖"} At least one
                      capital letter
                    </li>
                    <li
                      className={
                        validationStatus.number
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {" "}
                      {validationStatus.number ? "✔" : "✖"} At least one number
                    </li>
                    <li
                      className={
                        validationStatus.specialChar
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {" "}
                      {validationStatus.specialChar ? "✔" : "✖"} At least one
                      special character
                    </li>
                    <li
                      className={
                        validationStatus.length
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {" "}
                      {validationStatus.length ? "✔" : "✖"} Be at least 8
                      characters
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="">
              <input
                type="submit"
                value="Sign Up"
                className="btn-block cursor-pointer text-white py-2 rounded-sm hover:bg-[#d31f0b] bg-[#FF3811]"
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
              Already have an Account ?{" "}
              <Link to={"/login"}>
                <span className="text-[#ff3811] underline font-semibold">
                  Log in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
