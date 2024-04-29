import { Link } from "react-router-dom";

const CategoryCard = ({catagory}) => {
  return (
    <div>
        <Link to={`/subcards/${catagory?.Subcategory_Name}`}>
        <div className="card  bg-base-100  border hover:bg-red-300 cursor-pointer">
        <figure className="px-10 pt-10">
          <img
            src={catagory?.Image}
            alt="Shoes"
            className="rounded-xl min-h-[250px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{catagory?.Subcategory_Name}</h2>
    
 
        </div>
      </div>
        </Link>

    </div>
  );
};

export default CategoryCard;
