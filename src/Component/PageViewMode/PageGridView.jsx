import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const PageGridView = ({ collections }) => {
  return (
    <section className="grid  grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
      {collections.map((item) => (
        <Link
          to={`${item._id}`}
          key={item._id}
          className="hover:shadow-2xl dark:shadow-gray-600"
        >
          <div className="md:h-80 h-48 overflow-hidden ">
            {item.img && (
              <div className="h-3/4">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
            )}
            <div className="px-1 flex flex-col justify-evenly h-1/4">
              <div>
                <h2 className="md:text-sm text-[10px] font-semibol">
                  {item?.name?.length > 35
                    ? `${item.name.slice(0, 35)}...`
                    : item.name}
                </h2>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs md:text-lg">Tk: {item.price}</p>{" "}
                {item?.ratings && (
                  <span className="flex items-center text-xs md:text-lg">
                    <Rating
                      className="md:max-w-20 max-w-10"
                      value={item.ratings}
                      readOnly
                    />
                    <span className="text-[6px] md:text-[9px]">
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

export default PageGridView;
