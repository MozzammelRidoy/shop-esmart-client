import AdminPageGridView from "../../../Component/PageViewMode/AdminPageGridView";
import useReadAllProductsForAdmin from "../../../hooks/useReadAllProductsForAdmin";

const AllProducts = () => {
    const [collections, isLoading, refetch] = useReadAllProductsForAdmin(`/products/admin`)
    console.log(collections);
    return (
        <div>
            <h2 className="text-2xl md:text-4xl text-center py-4">All Products {collections.length}</h2>

            <div>
                <AdminPageGridView collections={collections} refetch={refetch}></AdminPageGridView>
            </div>
            
        </div>
    );
};

export default AllProducts;