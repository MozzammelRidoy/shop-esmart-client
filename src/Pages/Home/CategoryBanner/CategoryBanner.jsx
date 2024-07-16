import { Link } from "react-router-dom";

const CategoryBanner = () => {
  const categories = [
    { id: 1, category: "mens" },
    { id: 2, category: "womens" },
    { id: 3, category: "kids" },
    { id: 4, category: "toys" },
    { id: 5, category: "cosmetics" },
    { id: 8, category: "sports" },
    { id: 6, category: "accessores" },
    { id: 7, category: "electronic" },
  ];
  return (
    <div
    data-aos="fade-right" data-aos-duration="1500"
      className="order-2 md:h-[420px] col-span-4 md:col-span-1 grid md:grid-cols-2 grid-cols-4 shadow-lg dark:shadow-slate-900 "
    >
      {categories.map((category) => (
        <Link key={category.id} to={`/category/${category.category}`}>
          <div className="md:h-full h-16 font-bold flex-col  w-full flex justify-center items-center dark:hover:bg-slate-700 dark:hover:shadow-slate-900 hover:bg-slate-100 hover:shadow-lg md:text-base text-sm uppercase text-wrap">
            {category.category}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryBanner;
