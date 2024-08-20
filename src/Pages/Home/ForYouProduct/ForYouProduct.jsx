import {  useState } from "react";
import PageViewMode from "./../../../Component/PageViewMode/PageViewMode";
import PageGridView from "./../../../Component/PageViewMode/PageGridView";
import PageListView from "../../../Component/PageViewMode/PageListView";
import useReadAllProducts from "../../../hooks/useReadAllProducts";
const ForYouProduct = () => {
  const [collections, isLoading] = useReadAllProducts('/products'); 
  
  const pageViewFromLS = localStorage.getItem("pageView") || "grid";
  const [viewMode, setViewMode] = useState(pageViewFromLS);
  

  

  const handleLoadmore = () => {
    
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
          disabled={isLoading}
          className="bg-[#FF3811] py-1 text-white rounded text-base hover:bg-[#da2e0c] text-center md:py-2 w-full "
        >
          {isLoading ? "Loading.." : "Load More"}
        </button>
      </div>
    </section>
  );
};

export default ForYouProduct;
