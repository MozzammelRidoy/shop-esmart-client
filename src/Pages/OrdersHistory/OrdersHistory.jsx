import EmptyPage from "../../Component/EmptyPage/EmptyPage";
import WaitingLoader from "../../Component/WaitingLoader/WaitingLoader";
import useMyOrders from "../../hooks/useMyOrders";
import OrderDetailsPage from "../MyOrders/OrderDetailsPage";

const OrdersHistory = () => {
    const order_status = "history";
  const { orders, loading } = useMyOrders({ order_status });

    return (
        <div className="min-h-96">
      <h2 className="md:text-4xl text-2xl text-center mt-2 md:mt-3">
        My Orders History!
      </h2>
      <h2 className="md:text-xl text-lg text-center mb-3  md:mt-2 md:mb-5">
        Total Orders {orders.length}
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

export default OrdersHistory;