
import { useState } from "react";
import useCategories from "../../../hooks/useCategories";
import ReactTagInput from "./ReactTagInput";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddNewProduct = () => {
    const axiosSecure = useAxiosSecure(); 

  const [categories] = useCategories();
  
  const [collectProductTags, setCollectProductTags] = useState([]); 
  
  


  const handleAddNewProduct = async(e) => {
    e.preventDefault(); 
    const form = new FormData(e.target); 
    const productName = form.get('productName'); 
    const productCategory = form.get('productCategory').split(',');
    const productDetails = form.get('productDetails'); 
    const sellPrice = parseInt(form.get('sellPrice')); 
    const costPrice = parseInt(form.get('costPrice')); 
    const discountPrice = parseInt(form.get('discountPrice')); 
    const stockStatus = form.get('stockStatus') === 'true'; 
    const stockQuantity = parseInt(form.get('stockQuantity')); 
    const productBrand = form.get('productBrand'); 
    const productTags = collectProductTags.map(tag => tag.text); 

    const productInformation = {productName, productCategory , productDetails, sellPrice, costPrice, discountPrice, stockStatus, stockQuantity, productBrand, productTags}; 
    

    const res = await axiosSecure.post('/products/addnew', productInformation); 
    console.log(res.data);



  }
  

  


  return (
    <div className="md:max-w-6xl mx-auto p-3 md:p-0 mb-10">
      <h2 className="text-2xl md:text-4xl text-center py-4">Add New Product</h2>
      <div>
        <form onSubmit={handleAddNewProduct}>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
            <div className="space-y-2">
              <label className="text-2xl" htmlFor="productName">
                Product Name
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 rounded-sm border"
                placeholder="Product Name"
                required
                name="productName"
              />
            </div>
            <div className="space-y-2">
              <label className="text-2xl" htmlFor="productCategory">
                Product Category
              </label>
              <select
                name="productCategory"
                defaultValue={"default"}
                required
                className="w-full py-[5px] border px-2 capitalize"
              >
                <option disabled value={"default"}>
                  Select a Category
                </option>
                {categories.map((category) => (
                  <option
                    key={category._id}
                    className="capitalize py-1"
                    value={category.categoryName}
                  >
                    {category.categoryName[1]}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-2xl" htmlFor="productDetails">
                Product Description
              </label>
              <textarea
                rows={1}
                className="w-full py-1 px-2 rounded-sm border"
                
                required
                name="productDetails"
              > 
                
              </textarea>
            </div>
            <div className="space-y-2">
              <label className="text-2xl" htmlFor="sellPrice">
                Sell Price
              </label>
              <input
                className="w-full py-1 px-2 rounded-sm border"
                type="number"
                placeholder="Sell Price (provide number)"
                min={0}
                required
                name="sellPrice"
              />
            </div>
            <div className="space-y-2">
              <label className="text-2xl" htmlFor="costPrice">
                Cost Price
              </label>
              <input
                className="w-full py-1 px-2 rounded-sm border"
                type="number"
                placeholder="Cost Price (provide number)"
                min={0}
                required
                name="costPrice"
              />
            </div>
            <div className="space-y-2">
              <label className="text-2xl" htmlFor="discountPrice">
                Discount Price
              </label>
              <input
                className="w-full py-1 px-2 rounded-sm border"
                type="number"
                defaultValue={0}
                min={0}
                placeholder="Discount Price calculate % percentage (provide number)"
                name="discountPrice"
              />
            </div>
            <div className="space-y-2">
              <label className="text-2xl" htmlFor="stockStatus">
                Stock Status
              </label>
              <select
                name="stockStatus"
                defaultValue={"default"}
                required
                className="w-full py-[5px] border px-2 capitalize"
              >
                <option disabled value={"default"}>
                  Set Stock Status
                </option>
                <option value={true}>Available</option>
                <option value={false}>Unavailable</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-2xl" htmlFor="stockQuantity">
                Stock Quantity
              </label>
              <input
                type="number"
                className="w-full py-1 px-2 rounded-sm border"
                placeholder="Stock Quantity (provide number)"
                min={0}
                required
                name="stockQuantity"
              />
            </div>
            <div className="space-y-2">
              <label className="text-2xl" htmlFor="productBrand">
                Product Brand
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 rounded-sm border"
                placeholder="Product Brand (optional)"
                
                name="productBrand"
              />
            </div>
            <div className="space-y-2">
              <label className="text-2xl" htmlFor="productTag">
                Product Tag
              </label>
              <ReactTagInput setCollectProductTags={setCollectProductTags}></ReactTagInput>
            </div>

            <div>
                <input type="file" />
            </div>
            <div className="col-span-2">
                <div className="w-1/2 mx-auto">

                <button className="w-full bg-[#ff3811] text-white py-2 rounded-sm outline-none">Add Product</button>
                </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
