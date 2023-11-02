import {card,cardImage} from "../../styles/card.module.css";
import Button from "react-bootstrap/Button";
import {useNavigate}from "react-router-dom";
import Stars from "../Stars";
import PropTypes from "prop-types";
const ProductCard = ({description,price,category,rating,thumbnail,id:productId}) => {
  const navigate=useNavigate();
  return (
    <>
      <div className={card}>
        <img
          src={thumbnail}
          alt=""
          className={cardImage}
        />
        <div>
         <p className="m-0">
          {description}
         </p>
         <h5>{category}</h5>
          <div className="d-flex justify-content-between">
            <span>${price}</span>
          <Stars rating={rating}/>
          </div>
        </div>
        <Button variant="primary" size="sm" onClick={()=> navigate(`/products/${productId}`)}>
          Buy Now
        </Button>
      </div>
    </>
  );
};
ProductCard.propTypes={
  description:PropTypes.string,
  price:PropTypes.number,
  thumbnail:PropTypes.string,
  category:PropTypes.string,
  rating:PropTypes.number,
  id:PropTypes.number,
}
export default ProductCard;