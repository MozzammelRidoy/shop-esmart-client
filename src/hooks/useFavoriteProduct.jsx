import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useFavoriteProduct = ({dataLoad=10}) => {
    const axiosSecure = useAxiosSecure(); 
    const {user} = useAuth(); 
    const {data, isPending, refetch} = useQuery({
        queryKey : ['favorite'],
        queryFn : async()=>{
            const res = await axiosSecure.get(`/favorite?email=${user.email}&dataLoad=${dataLoad}`); 
            return res.data; 
        }
    })
    const favorites = data?.favoriteResults || []; 

    const totalResult = data?.totalResult || 0; 
    
    return {favorites, totalResult, isPending, refetch }
};

export default useFavoriteProduct;