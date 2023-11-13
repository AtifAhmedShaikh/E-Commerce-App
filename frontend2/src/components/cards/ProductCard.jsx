const ProductCard = () => {
  return (
        <div className="w-[23%] flex flex-col h-[20rem] px-2 hover:scale-95">
      <img
        className="w-100 h-[75%] rounded-md"
        src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
      <h4 className="text-gray-500 font-light">product category</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur 
      </p>
      <div className="flex justify-between px-2">
        <div className="star">
          <i className="bx bx-star"></i>
          <i className="bx bx-star"></i>
          <i className="bx bx-star"></i>
        </div>
        <span>$900</span>
      </div>
    </div>
  );
};

export default ProductCard;
