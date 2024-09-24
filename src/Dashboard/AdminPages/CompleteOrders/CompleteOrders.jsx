import { useEffect, useState } from "react";
import EmptyPage from "../../../Component/EmptyPage/EmptyPage";
import LoadMoreButton from "../../../Component/LoadMoreButton/LoadMoreButton";
import SearchTextButton from "../../../Component/SearchTextButton/SearchTextButton";
import CompleteOrderView from "./CompleteOrderView";
import useOrdersFetch from "../../../hooks/useOrdersFetch";
import WaitingLoader from "../../../Component/WaitingLoader/WaitingLoader";

const CompleteOrders = () => {
    const route = "orders-complete";
    const [searchText, setSearchText] = useState("");
    const [dataLoad, setDataLoad] = useState(10);
  
    const { orders, isPending, totalResult, refetch } = useOrdersFetch({
      route,
      searchText,
      dataLoad,
    });
  
    console.log(orders);
  
    useEffect(() => {
      refetch();
    }, [searchText, dataLoad, refetch]);
    return (
        <div>
        <h2 className="text-2xl md:text-4xl text-center py-4">Complete Orders {totalResult}</h2>
        {isPending && <WaitingLoader></WaitingLoader>}
        <SearchTextButton setSearchText={setSearchText}></SearchTextButton>
  
       {
          totalResult ?  <div>
          {orders.map((order) => (
            <CompleteOrderView key={order._id} refetch={refetch} order={order}></CompleteOrderView>
          ))}
        </div> : <EmptyPage></EmptyPage>
       }
  
        {totalResult > 10 && (
          <LoadMoreButton
            setDataLoad={setDataLoad}
            isPending={isPending}
          ></LoadMoreButton>
        )}
      </div>
    );
};

export default CompleteOrders;