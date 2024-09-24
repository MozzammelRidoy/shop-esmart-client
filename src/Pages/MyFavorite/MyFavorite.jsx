import { useEffect, useState } from "react";
import EmptyPage from "../../Component/EmptyPage/EmptyPage";
import HomeAndBackButton from "../../Component/HomeAndBackButton/HomeAndBackButton";
import useFavoriteProduct from "../../hooks/useFavoriteProduct";
import LoadMoreButton from "../../Component/LoadMoreButton/LoadMoreButton";
import WaitingLoader from "../../Component/WaitingLoader/WaitingLoader";

const MyFavorite = () => {
  const [dataLoad, setDataLoad] = useState(10);

  const { favorites, totalResult, refetch, isPending } = useFavoriteProduct({
    dataLoad,
  });

  useEffect(() => {
    refetch();
  }, [dataLoad, refetch]);
  return (
    <div className="mt-3">
      <HomeAndBackButton></HomeAndBackButton>
      {isPending && <WaitingLoader></WaitingLoader>}
      <h2 className="text-center md:text-4xl text-2xl my-3 ">My Favorite {totalResult} Items</h2>
      {totalResult > 0 ? (
        <div>Content Here...</div>
      ) : (
        <EmptyPage></EmptyPage>
      )}

      {totalResult > 10 && (
        <LoadMoreButton setDataLoad={setDataLoad}></LoadMoreButton>
      )}
    </div>
  );
};

export default MyFavorite;
