import { useParams } from "react-router-dom";
import TitleCover from "../../Component/TitleCover/TitleCover";
import { Helmet } from "react-helmet-async";
import useCapitalize from "../../hooks/useCapitalize";



const Category = () => {
    const {category} = useParams(); 
    const capitalizedCategory = useCapitalize(category)
    
    

    return (
        <div className="md:mt-6 mt-3">
            
            <Helmet>
                <title>Shop Esmart | {capitalizedCategory}</title>
            </Helmet>
            
            <TitleCover titleText={category}/>
            
        </div>
    );
};

export default Category;