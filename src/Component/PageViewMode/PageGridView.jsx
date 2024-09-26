import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import AddFavoriteProduct from "../AddFavoriteProduct/AddFavoriteProduct";

const PageGridView = ({ collections }) => {
  return (
    <section className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
      {collections.map((item) => (
        <div className="relative z-10" key={item._id}>
          <Link
            to={`/product/${item._id}`}
            className="hover:shadow-2xl dark:shadow-gray-600"
          >
            <div className="md:h-[340px] h-48 overflow-hidden pb-1">
              {item?.images[0]?.image_url && (
                <div className="h-3/4  relative">
                  <img
                    className="w-full h-full object-cover"
                    src={item?.images[0]?.image_url}
                    alt=""
                  />
                  <span className="absolute bottom-0 left-0 bg-[#ff3811] text-white md:px-2 px-1 rounded-tr-full md:text-base text-sm">
                    {item.discountPercent}%
                  </span>
                </div>
              )}
              <div className="px-1 flex flex-col justify-evenly h-1/4">
                <div>
                  <h2 className="md:text-lg text-[10px] capitalize text-justify font-semibol">
                    {item?.productName?.length > 35
                      ? `${item.productName.slice(0, 35)}....`
                      : item.productName}
                  </h2>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs md:text-lg">Tk: {item.finalPrice}</p>{" "}
                  {item?.ratings && (
                    <span className="flex items-center text-xs md:text-lg">
                      <Rating
                        className="md:max-w-20 max-w-10"
                        value={item.averageRating}
                        readOnly
                      />
                      <span className="text-[8px] md:text-[12px]">
                        ({item.totalRatingsCount})
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
          <span className={"absolute md:bottom-[90px] bottom-[53px] right-1"}>
            {" "}
            <AddFavoriteProduct product_id={item._id}></AddFavoriteProduct>
          </span>
        </div>
      ))}
    </section>
  );
};

export default PageGridView;
