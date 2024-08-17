import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useCategories = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: categories = [],
    isPending: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosSecure.get("/categories");
      return res.data;
    },
  });
  return [categories, isLoading, refetch];
};

export default useCategories;
