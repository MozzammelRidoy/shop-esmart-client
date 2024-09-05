import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const PageListView = ({ collections }) => {
 

  return (
    <section className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
      {collections.map((item) => (
        <Link to={`/product/${item._id}`} key={item._id} className="hover:shadow-2xl dark:shadow-gray-600">
            <div className="grid grid-cols-3 rounded-lg h-36 md:h-56">
          {item?.images[0]?.image_url && (
            <div className="col-span-1 md:h-56 h-36 relative">
              <img className="object-cover w-full h-full " src={item?.images[0]?.image_url} alt="" />
              <span className="absolute bg-[#ff3811] text-sm md:text-base px-1 md:px-2 bottom-0 left-0 rounded-tr-full text-white">{item.discountPercent}%</span>
            </div>
          )}
          <div className="col-span-2 flex flex-col justify-around border dark:border-black p-4 border-s-0">
            <div>
              <p className="md:text-lg text-sm capitalize font-semibold">
                {item?.productName?.length > 50
                  ? `${item.productName.slice(0, 50)}...`
                  : item.productName}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold md:text-lg">Tk : {item.finalPrice}</p>
              {item?.ratings && (
                <span className="flex items-center text-xs md:text-lg">
                  <Rating
                    className="md:max-w-20 max-w-14"
                    value={item.ratings}
                    readOnly
                  />
                  <span className="text-[8px] md:text-[12px]">
                    ({item.ratingsCount})
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
        </Link>
      ))}
    </section>
  );
};

export default PageListView;
