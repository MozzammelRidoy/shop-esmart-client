import useDistrictsFetch from "../../Checkout/CheckoutComponents/useDistrictsFetch";

const ProfileAddress = () => {
  const districts = useDistrictsFetch();

  const hanldeUpdateInfo = (e) => {
    e.preventDefault();
    console.log("update request");
  };

  return (
    <div>
      <form onSubmit={hanldeUpdateInfo} className="md:p-4 p-2 space-y-4">
        <div className="grid grid-cols-3 items-center">
          <label className="col-span-1 text-lg font-semibold" htmlFor="name">
            Full Name
          </label>
          <input
            className="col-span-2 w-full border-b border-gray-400 py-1 px-2 outline-none rounded-sm"
            type="text"
            placeholder="Name"
            defaultValue={"Omuker Name"}
          />
        </div>
        <div className="grid grid-cols-3 items-center">
          <label className="col-span-1 text-lg font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="col-span-2 w-full border-b border-gray-400 py-1 px-2 outline-none rounded-sm text-gray-400 dark:text-gray-500"
            type="email"
            placeholder="Email"
            defaultValue={"omuker@email.com"}
            readOnly
          />
        </div>
        <div className="grid grid-cols-3 items-center">
          <label className="col-span-1 text-lg font-semibold" htmlFor="phone">
            Phone
          </label>
          <input
            className="col-span-2 w-full border-b border-gray-400 py-1 px-2 outline-none rounded-sm"
            type="Number"
            placeholder="Phone"
            defaultValue={8801580325199}
          />
        </div>
        <div className="grid md:grid-cols-6 grid-cols-3 gap-4  items-center">
          <label className="col-span-1 text-lg font-semibold" htmlFor="name">
            City
          </label>
          <select
            defaultValue={"default"}
            className="col-span-2 w-full border-b border-gray-400 py-1 px-2 outline-none rounded-sm"
          >
            <option value={"default"}>Select Your City</option>

            {districts.map((city, index) => (
              <option key={index} value={city.district}>
                {city.district}
              </option>
            ))}
          </select>
          <label className="col-span-1 text-lg font-semibold" htmlFor="name">
            Country
          </label>
          <select
            name="country"
            className="col-span-2 w-full border-b border-gray-400 py-1 px-2 outline-none rounded-sm"
            id=""
            defaultValue={"bangladesh"}
          >
            <option value="bangladesh">Bangladesh</option>
          </select>
        </div>
        <div className="grid grid-cols-3 items-center">
          <label className="col-span-1 text-lg font-semibold" htmlFor="name">
            Address
          </label>

          <textarea
            rows={1}
            className="col-span-2 w-full border-b border-gray-400 py-1 px-2 outline-none rounded-sm"
            placeholder="Address"
            defaultValue={"Bashurhat Companiganj Noakhali Chittagang"}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="text-white bg-[#ff3811] hover:bg-orange-800 py-1 w-2/5">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileAddress;
