import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const PageListView = ({ collections }) => {
  console.log(collections);

  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {collections.map((item) => (
        <Link to={`product/${item._id}`} key={item._id} className="hover:shadow-2xl dark:shadow-gray-600">
            <div className="grid grid-cols-3 rounded-lg h-38 md:h-48">
          {item.img && (
            <div className="col-span-1">
              <img className="object-cover w-full h-full " src={item.img} alt="" />
            </div>
          )}
          <div className="col-span-2 flex flex-col justify-around border dark:border-black p-4 border-s-0">
            <div>
              <p className="md:text-lg text-xs font-semibold">
                {item.name.length > 50
                  ? `${item.name.slice(0, 50)}...`
                  : item.name}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">Tk : {item.price}</p>
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
