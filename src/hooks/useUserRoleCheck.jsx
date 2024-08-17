import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useEffect, useState } from "react";


const useUserRoleCheck = () => {
    const axiosSecure = useAxiosSecure();
  const { user , loading } = useAuth();
  const [userType, setUserType] = useState('user'); 
  const [isBaned, setIsBanned] = useState(false);
    
  
  
  useEffect(()=>{
    if(loading) return
      axiosSecure.post('/users/type', {email : user?.email}).then(res => {
        setUserType(res.data.type); 
        setIsBanned(res.data.isBaned);
      } )

  },[axiosSecure, user, loading])

  return {userType, isBaned}

    
};

export default useUserRoleCheck;
