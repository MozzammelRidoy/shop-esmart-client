import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = () => {
  const [count, setCount] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPage = Math.ceil(count / itemPerPage);

  const pages = [...Array(numberOfPage).keys()];

  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:5000/productsPagination?page=${currentPage}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [itemPerPage, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePerPage = (e) => {
    const intValue = e.target.value;
    setItemPerPage(intValue);
    setCurrentPage(0);
  };

  return (
    <div className="px-2 grid grid-cols-3 md:grid-cols-1 md:flex justify-center items-center gap-2 ">
      <div className="order-2 md:order-1">
        <button
          onClick={handlePrevPage}
          //   className={`hover:text-[#ff3811]  flex items-center gap-2 ${currentPage===0 ? 'hidden' : undefined}`}
          className="hover:text-[#ff3811]  flex items-center gap-2"
        >
          <FaArrowLeft></FaArrowLeft> Prev
        </button>
      </div>
      <div className="col-span-3 order-1  md:order-2 flex justify-center  items-center">
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={page}
            className={`px-3 py-1 rounded-full 
                 ${
                   currentPage === page
                     ? "bg-[#FF3811] text-white hover:bg-[#c2290b]"
                     : undefined
                 }`}
          >
            {page + 1}
          </button>
        ))}
      </div>
      <div className="md:order-3 order-4 flex items-center justify-end">
        <button
          onClick={handleNextPage}
          //   className={`hover:text-[#ff3811]  flex items-center gap-2 ${currentPage===pages.length-1 ? 'hidden' : undefined}`}
          className="hover:text-[#ff3811]  flex items-center gap-2"
        >
          Next <FaArrowRight></FaArrowRight>
        </button>
      </div>

      <div className="md:order-4 order-3 text-center">
        <select
          className="w-full  py-1 px-2 outline-none border rounded"
          value={itemPerPage}
          onChange={handlePerPage}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
