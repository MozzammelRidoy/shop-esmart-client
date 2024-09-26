import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useFavoriteProduct = ({ dataLoad }) => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data, isPending, refetch } = useQuery({
    queryKey: ["favorite"],
    queryFn: async () => {
      if (loading) {
       isPending;
      }
      const res = await axiosSecure.get(
        `/favorites?email=${user.email}&dataLoad=${dataLoad}`
      );
      return res.data;
    },
  });

  const favorites = data?.favoriteResults || [];

  const totalResult = data?.totalResult || 0;

  return { favorites, totalResult, isPending, refetch };
};

export default useFavoriteProduct;
