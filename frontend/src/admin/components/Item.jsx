import React from 'react'
import PropTypes from 'prop-types'
import {item} from "../styles/index.module.css";
const Item = ({mainImage,title,category,price,quantity,_id}) => {
    const handleRemoveButton=(productId)=>{
        console.log(productId)
    }
    return (
        <React.Fragment>
            <div className={item}>
                <img src={mainImage} alt="" />
                <div>
                    <h5>{title}</h5>
                    <p>{category}</p>
                </div>
                <p>${price}</p>
                <p>${price * quantity}</p>
                <div>
                    <button
                        className="cut-button bg-transparent text-danger"
                        onClick={() => handleRemoveButton(_id)}
                    >
                        X
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}
Item.propTypes={
   mainImage:PropTypes.string,
   title:PropTypes.string,
   category:PropTypes.string,
   price:PropTypes.string,
   quantity:PropTypes.number,
   _id:PropTypes.string,
}
export default Item
