import PropTypes from 'prop-types'
import { useRef } from 'react';
const ImagesWrapper = ({mainImage,relatedImages}) => {
  const mainImageElement=useRef(null);
  const handleImages=(e)=>{
    mainImageElement.current.src=e.target.src;
  }
  return (
    <div className="w-[35%] h-[80vh] flex flex-col px-2 py-2">
      <img
        className="w-100 rounded-md h-[80%]"
        src={mainImage}
        alt=""
        ref={mainImageElement}
      />
      <div className="flex gap-1 mt-1 h-[20%] w-[100%] overflow-x-scroll">
        {relatedImages?.map(image=>{
         return <img
          className="w-1/5 rounded-md "
          src={image}
          alt=""
          key={image}
          onClick={handleImages}
        />
        })}
      </div>
    </div>
  );
};
ImagesWrapper.propTypes={
  mainImage:PropTypes.string,
  relatedImages:PropTypes.array
}
export default ImagesWrapper;
