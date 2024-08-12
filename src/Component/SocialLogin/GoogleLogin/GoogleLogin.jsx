import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  return (
    <div className="">
      <button className="btn-block flex items-center justify-center gap-2  py-2 rounded-sm hover:bg-[#ff3811] border border-[#FF3811]">
        <FcGoogle className="text-xl" />
        Continue With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
