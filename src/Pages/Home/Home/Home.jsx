import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryBanner from "../CategoryBanner/CategoryBanner";

const Home = () => {
  return (
    <section className="md:mt-6 mt-3">
      <Helmet>
        <title>Shop Esmart | Home</title>
      </Helmet>

      <div   className="grid grid-cols-4">
        <CategoryBanner></CategoryBanner>
        <Banner></Banner>
      </div>




    </section>
  );
};

export default Home;
