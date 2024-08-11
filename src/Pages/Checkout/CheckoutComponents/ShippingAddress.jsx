import useDistrictsFetch from "./useDistrictsFetch";


const ShippingAddress = () => {
  const districts = useDistrictsFetch(); 

  
 
  return (
    <div className="bg-gray-200  dark:bg-gray-700">
      <h2 className="md:text-2xl text-lg px-2">Shipping Address</h2>
      <div className="md:p-4 p-3">
        <form className="space-y-3">
          <div>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="w-full py-1 px-2 outline-none rounded-sm border"
            />
          </div>
          <div>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-1 px-2 outline-none rounded-sm border"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone*</label>
            <input
              minLength={11}
              maxLength={14}
              type="number"
              name="phone"
              placeholder="Phone number"
              className="w-full py-1 px-2 outline-none rounded-sm border"
            />
          </div>

          <div>
            <label htmlFor="city">City*</label>
            <select
              name="city"
              className="w-full border py-1 px-2 outline-none rounded-sm"
            >
              <option selected>Select Your City</option>
              {districts.map((district, index) => (
                <option value={district.district} key={index}>
                  {" "}
                  {district.district}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="country">Country*</label>
            <select
              name="country"
              className="w-full border py-1 px-2 outline-none rounded-sm"
            >
              <option selected>Bangladesh</option>
            </select>
          </div>
          <div>
            <label htmlFor="name">Shipping Address*</label>
            <textarea
              rows={4}
              className="w-full border outline-none px-2 py-1"
              placeholder="Shippind Address"
            ></textarea>
          </div>
          <div>
            <label htmlFor="name">
              Additional Note{" "}
              <span className="text-gray-400 dark:text-gray-500">optional</span>
            </label>
            <textarea
              rows={2}
              className="w-full border outline-none px-2 py-1"
              placeholder="Additional Note"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingAddress;
