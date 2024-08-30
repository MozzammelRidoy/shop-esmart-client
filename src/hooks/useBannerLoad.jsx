import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useBannerLoad = () => {
    const axiosSecure = useAxiosSecure(); 
    
    const {data : bannersData = [], isPending, refetch} = useQuery({
        queryKey : ['banners'],
        queryFn : async() => {
            const res = await axiosSecure.get('/banners'); 
            return res.data; 
        }
    }); 

    return [bannersData, isPending, refetch]
};


export default useBannerLoad;