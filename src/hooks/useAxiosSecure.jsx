import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { userLogout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.request.use(
      (config) => {
        config.withCredentials = true;
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      async (err) => {
        const status = err.response.status;

        if (status === 401 || status === 403) {
          await userLogout();
          navigate("/login");
        }

        return Promise.reject(err);
      }
    );
  }, [navigate, userLogout]);
  return axiosSecure;
};

export default useAxiosSecure;
