import { useNavigate } from "react-router-dom";
import RatingStars from "../../wrappers/RatingStars";
import Button from "../Button";
import PropTypes from "prop-types";
const ProductCard = ({ title, description, price, mainImage,_id }) => {
  const navigate = useNavigate();
  return (
    <div className="w-1/4 flex flex-col h-auto  hover:scale-95 mb-3 sm:w/1/2 border py-1 px-2">
      <img className="w-100 h-[14rem] " src={mainImage} alt="" />
      <h4 className="text-gray-500 font-light">{title}</h4>
      <p className="text-sm font-normal">{description}</p>
      <div className="flex justify-between px-2">
        <RatingStars />
        <span>${price}</span>
      </div>
      <Button
        className="bg-blue-700 text-gray-100 rounded-md w-fit px-2 py-1"
        onClick={() => navigate(`/products/${_id}`)}
      >
        But Now
      </Button>
    </div>
  );
};
ProductCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  mainImage: PropTypes.string,
  _id: PropTypes.string,
};
export default ProductCard;
