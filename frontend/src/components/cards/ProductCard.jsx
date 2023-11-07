import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {card,cardImage} from "../../styles/card.module.css";
import {useNavigate}from "react-router-dom";
import RatingStars from "../RatingStars";
const ProductCard = ({description,price,category,rating,mainImage,_id:productId}) => {
  const navigate=useNavigate();
  return (
    <>
      <div className={card}>
        <img
          src={mainImage}
          alt="---"
          className={cardImage}
        />
        <div>
         <p className="m-0">
          {description}
         </p>
         <h5>{category}</h5>
          <div className="d-flex justify-content-between">
            <span className="priceElement">${price}</span>
          <RatingStars rating={rating}/>
          </div>
        </div>
        <Button variant="outline-primary" size="sm" onClick={()=> navigate(`/products/${productId}`)}>
          Buy Now
        </Button>
      </div>
    </>
  );
};
ProductCard.propTypes={
  description:PropTypes.string,
  price:PropTypes.number,
  mainImage:PropTypes.string,
  category:PropTypes.string,
  rating:PropTypes.number,
  _id:PropTypes.string,
}
export default ProductCard;