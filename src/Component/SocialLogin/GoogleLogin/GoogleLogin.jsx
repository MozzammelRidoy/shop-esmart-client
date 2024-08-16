import { FcGoogle } from "react-icons/fc";
import useAuth from "./../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { confirmAlert, failedAlert } from "../../SweetAlart/SweelAlart";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { userGoogleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation(); 
  const navigate = useNavigate(); 


  const handleGoogleLogin = () => {
    userGoogleLogin()
      .then(async (result) => {
        console.log(result.user);
        if (result.user) {
          const user = result.user;
          const googleUser = {
            name: user.displayName,
            email: user.email,
            creationTime: user?.metadata?.creationTime,
            lastSignInTime: user?.metadata?.lastSignInTime,
            type: "user",
            isBaned: false,
            activity : true
          };
          const res = await axiosPublic.post("/users", googleUser);
          console.log(res.data)
          confirmAlert("God Job! Login Success");
          navigate(location?.state ? location.state : '/');

        }
      })
      .catch((err) => {
        if(err){
          failedAlert('Oh No! Login Failed');
        }
      });
  };

  return (
    <div className="">
      <button
        onClick={handleGoogleLogin}
        className="btn-block flex items-center justify-center gap-2  py-2 rounded-sm hover:bg-[#ff3811] border border-[#FF3811]"
      >
        <FcGoogle className="text-xl" />
        Continue With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
