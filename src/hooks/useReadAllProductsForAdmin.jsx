import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReadAllProductsForAdmin = (path) => {
  const axiosSecure = useAxiosSecure();

  const { data: collections = [], isPending: isLoading, refetch } = useQuery({
    queryKey: ["productsforAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`${path}`);
      return res.data;
    },
  });

  return [collections, isLoading, refetch];
};

export default useReadAllProductsForAdmin;
