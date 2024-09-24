import useMyOrders from "../../hooks/useMyOrders";
import OrderDetailsPage from "./OrderDetailsPage";
import EmptyPage from "./../../Component/EmptyPage/EmptyPage";
import WaitingLoader from "./../../Component/WaitingLoader/WaitingLoader";

const MyOrders = () => {
  const order_status = "current_orders";
  const { orders, loading } = useMyOrders({ order_status });

  return (
    <div className="min-h-96">
      <h2 className="md:text-4xl text-2xl text-center my-3 md:my-6">
        My {orders.length} Orders Placed!
      </h2>
      {loading && <WaitingLoader></WaitingLoader>}

      {orders.length > 0 ? (
        <div>
          {orders.map((order) => (
            <OrderDetailsPage order={order} key={order._id}></OrderDetailsPage>
          ))}
        </div>
      ) : (
        <EmptyPage></EmptyPage>
      )}
    </div>
  );
};

export default MyOrders;
