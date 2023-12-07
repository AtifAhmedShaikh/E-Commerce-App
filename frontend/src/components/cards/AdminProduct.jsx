import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
const AdminProduct = ({mainImage,title,description,price}) => {
  const navigate=useNavigate();
  return (
    <div className="w-[100%] h-[4rem] rounded-md flex justify-between mb-5 border-b border-gray-300 pb-3">
      <div className="flex gap-2">
        <img
          className="w-[80px]  h-[100%] rounded-md"
          src={mainImage}
          alt=""
        />
        <div>
          <h5>{title}</h5>
          <h5>{description}</h5>
        </div>
      </div>
      <div className="flex gap-2">
        <p className="mr-5">{price}</p>
        <button className="border border-gray-200 w-[25px] h-[25px] rounded-[3px] hover:bg-gray-300" onClick={()=>navigate('/admin/overview')}>
          <i className="bx bx-pencil"></i>
        </button>
        <button className="border border-gray-200 w-[25px] h-[25px] rounded-[3px] hover:bg-gray-200">
          <i className="bx bx-trash"></i>
        </button>
      </div>
    </div>
  );
};
AdminProduct.propTypes={
  mainImage:PropTypes.string,
  title:PropTypes.string,
  description:PropTypes.string,
  price:PropTypes.number,
}
export default AdminProduct;
