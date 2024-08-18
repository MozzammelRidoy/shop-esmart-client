import { Link } from "react-router-dom";
import useCategories from "../../../hooks/useCategories";

const CategoryBanner = () => {
  const [categories] = useCategories();

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      className="order-2 md:h-[420px] col-span-4 md:col-span-1 grid md:grid-cols-2 grid-cols-4 shadow-lg dark:shadow-slate-900 "
    >
      {categories.map((category) => (
        <Link key={category._id} to={`/category/${category.categoryName[1]}`}>
          <div className="md:h-full h-16 font-semibold flex-col  w-full flex justify-center items-center dark:hover:bg-slate-700 dark:hover:shadow-slate-900 hover:bg-slate-100 hover:shadow-lg md:text-base text-sm uppercase">
            <p className="w-3/4 text-center mx-auto text-wrap">
              {category.categoryName[1]}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryBanner;
