import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryBanner from "../CategoryBanner/CategoryBanner";
import HotPicks from "../HotPicks/HotPicks";
import ForYouProduct from "../ForYouProduct/ForYouProduct";

const Home = () => {
  return (
    <section className="md:mt-6 mt-3">
      <Helmet>
        <title>Shop Esmart | Home</title>
      </Helmet>

      {/* brand promotion cover or slider and category section  */}
      <div className="grid grid-cols-4">
        <CategoryBanner></CategoryBanner>
        <Banner></Banner>
      </div>

      {/* Hot Picks */}
      <div className="mt-4 md:max-w-6xl px-3 md:px-0 mx-auto">
        <HotPicks></HotPicks>
      </div>

      {/* For You  */}
      <div className="mt-4 md:max-w-6xl px-3 md:px-0 mx-auto">
        {/* <ForYouProduct></ForYouProduct> */}
      </div>
    </section>
  );
};

export default Home;
