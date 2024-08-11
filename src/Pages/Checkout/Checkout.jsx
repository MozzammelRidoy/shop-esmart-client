import HomeAndBackButton from "../../Component/HomeAndBackButton/HomeAndBackButton";
import PaymentMethod from "./CheckoutComponents/PaymentMethod";
import ReviewOrder from "./CheckoutComponents/ReviewOrder";
import ShippingAddress from "./CheckoutComponents/ShippingAddress";

const Checkout = () => {
  return (
    <div className="md:max-w-6xl mx-auto md:px-0 mt-3 ">
      <HomeAndBackButton></HomeAndBackButton>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
        <div>
          <ReviewOrder></ReviewOrder>
        </div>
        <div>
          <ShippingAddress></ShippingAddress>
        </div>
        <div>
          <PaymentMethod></PaymentMethod>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
