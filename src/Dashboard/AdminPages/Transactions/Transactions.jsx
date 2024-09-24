import { useEffect, useState } from "react";
import EmptyPage from "../../../Component/EmptyPage/EmptyPage";
import LoadMoreButton from "../../../Component/LoadMoreButton/LoadMoreButton";
import SearchTextButton from "../../../Component/SearchTextButton/SearchTextButton";
import TransactionView from "./TransactionView";
import useOrdersFetch from "../../../hooks/useOrdersFetch";
import { useParams } from "react-router-dom";
import WaitingLoader from "../../../Component/WaitingLoader/WaitingLoader";

const Transactions = () => {
    const {TxID} = useParams(); 
    const route = "orders-transaction";
    console.log(TxID);
    const [searchText, setSearchText] = useState('');
    const [dataLoad, setDataLoad] = useState(10);
  
    const { orders, isPending,totalResult, refetch } = useOrdersFetch({
      route,
      searchText,
      dataLoad,
    });
  
    
  
    useEffect(() => {
        if(TxID){
            setSearchText(TxID)
        }
        else{
            setSearchText('')
        }
      refetch();
    }, [searchText, dataLoad, refetch, TxID]);

    return (
        <div>
      <h2 className="text-2xl md:text-4xl text-center py-4">All Transaction {totalResult}</h2>

      <SearchTextButton setSearchText={setSearchText}></SearchTextButton>
      {isPending && <WaitingLoader></WaitingLoader>}

      {
        totalResult ? <div>
        {orders.map((transaction) => (
          <TransactionView key={transaction._id}  transaction={transaction}></TransactionView>
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

export default Transactions;