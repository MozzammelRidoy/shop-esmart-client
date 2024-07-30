import { useEffect, useState } from "react";
import PageViewMode from "./../../../Component/PageViewMode/PageViewMode";
import PageGridView from "./../../../Component/PageViewMode/PageGridView";
import PageListView from "../../../Component/PageViewMode/PageListView";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const ForYouProduct = () => {
  const [collections, setCollections] = useState([]);
  const axiosPublic = useAxiosPublic();
  const pageViewFromLS = localStorage.getItem("pageView") || "grid";
  const [viewMode, setViewMode] = useState(pageViewFromLS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosPublic.get("/products").then((res) => setCollections(res.data));
  }, [axiosPublic]);

  const handleLoadmore = () => {
    setLoading(true);
  };

  return (
    <section>
      <div className="flex justify-between mb-3 md:mb-5">
        <h2 className="md:text-3xl text-xl font-bold  gap-2">For you</h2>
        <PageViewMode
          viewMode={viewMode}
          setViewMode={setViewMode}
        ></PageViewMode>
      </div>

      {viewMode === "grid" ? (
        <PageGridView collections={collections} />
      ) : (
        <PageListView collections={collections} />
      )}

      <div className="w-1/3 mx-auto mt-4">
        <button
          onClick={handleLoadmore}
          disabled={loading}
          className="bg-[#FF3811] py-1 text-white rounded text-base hover:bg-[#da2e0c] text-center md:py-2 w-full "
        >
          {loading ? "Loading.." : "Load More"}
        </button>
      </div>
    </section>
  );
};

export default ForYouProduct;
