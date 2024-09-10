import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUsers = (path) => {
    const axiosSecure = useAxiosSecure(); 
  
    
    const {data : users = [], isPending : isLoading, refetch} = useQuery({
        queryKey : ['users', path],
        queryFn : async ()=> {
            const res = await axiosSecure.get(`${path}`)
            return res.data; 
        }
    })

    return [users, isLoading, refetch]
};

export default useUsers;