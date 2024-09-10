import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCarts = () => {
    const axiosSecure = useAxiosSecure(); 
    const {user} = useAuth(); 


    const {data, isPending, refetch} = useQuery({
        queryKey : ['carts', user?.email],
        queryFn : async() => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`); 
           
            return res.data;
        }
    })

   
    const carts = data?.carts || []; 
    const totalQuantity = data?.totalQuantity || 0 ;
    const totalPrice = data?.totalPrice || 0; 
    
    return {carts , totalQuantity, totalPrice, isPending, refetch }
};

export default useCarts;