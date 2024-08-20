import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReadAllProducts = (path) => {
    const axiosPublic = useAxiosPublic(); 

    const {data : collections = [], isPending : isLoading, refetch} = useQuery({
        queryKey : ['products'],
        queryFn : async () => {
            const res = await axiosPublic.get(`${path}`); 
            return res.data 
        }
    })

    return [collections, isLoading, refetch];
};

export default useReadAllProducts;