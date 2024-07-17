import { useEffect, useState } from "react";
import PageViewMode from "./../../../Component/PageViewMode/PageViewMode";
import PageGridView from "./../../../Component/PageViewMode/PageGridView";
import PageListView from "../../../Component/PageViewMode/PageListView";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const ForYouProduct = () => {
  const [collections, setCollections] = useState([]);
  const axiosPublic = useAxiosPublic();
  const pageViewFromLS = localStorage.getItem('pageView');
  const [viewMode, setViewMode] = useState(pageViewFromLS);

  useEffect(()=>{
    axiosPublic.get('/products')
    .then(res => setCollections(res.data));
  },[axiosPublic])

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
    </section>
  );
};

export default ForYouProduct;
