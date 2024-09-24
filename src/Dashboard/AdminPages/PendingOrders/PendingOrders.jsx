import { useEffect, useState } from "react";
import useOrdersFetch from "../../../hooks/useOrdersFetch";
import LoadMoreButton from "../../../Component/LoadMoreButton/LoadMoreButton";
import SearchTextButton from "../../../Component/SearchTextButton/SearchTextButton";
import PendingOrderView from "./PendingOrderView";
import EmptyPage from "../../../Component/EmptyPage/EmptyPage";
import WaitingLoader from "../../../Component/WaitingLoader/WaitingLoader";

const PendingOrders = () => {
  const route = "orders-pending";
  const [searchText, setSearchText] = useState("");
  const [dataLoad, setDataLoad] = useState(10);

  const { orders, isPending, totalResult, refetch } = useOrdersFetch({
    route,
    searchText,
    dataLoad,
  });

  
  

  useEffect(() => {
    refetch();
  }, [searchText, dataLoad, refetch]);
  if(isPending){
    return <WaitingLoader></WaitingLoader>
  }
  return (
    <div>
      <h2 className="text-2xl md:text-4xl text-center py-4">Pending Orders {totalResult}</h2>

      <SearchTextButton setSearchText={setSearchText}></SearchTextButton>
     

      {
        totalResult > 0 ? <div>
        {orders.map((order) => (
          <PendingOrderView key={order._id} refetch={refetch} order={order}></PendingOrderView>
        ))}
      </div> : <EmptyPage></EmptyPage>
      }

      {(totalResult > 10 && orders.length !== totalResult) && (
        <LoadMoreButton
          setDataLoad={setDataLoad}
          isPending={isPending}
        ></LoadMoreButton>
      )}
    </div>
  );
};

export default PendingOrders;
