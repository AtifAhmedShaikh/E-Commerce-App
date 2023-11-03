import React, { useRef } from 'react'
import { imageWrapper, main, slider } from "../styles/ProductDetails.module.css"
import PropTypes from 'prop-types'
const ImagesContainer = ({ thumbnail, images }) => {
    const thumbnailImage = useRef(null);
    const handleShowRelatedImage = (image) => {
        thumbnailImage.current.src = image;
    }
    return (
        <React.Fragment>
            <div className={imageWrapper}>
                <div className={main}>
                    <img
                        src={thumbnail}
                        alt=""
                        ref={thumbnailImage}
                    />
                </div>
                <div className={slider}>
                    {images?.map((image, index) => {
                        return <img src={image} key={index} onClick={() => handleShowRelatedImage(image)} />
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}
ImagesContainer.propTypes = {
    thumbnail: PropTypes.string,
    images: PropTypes.array,
}
export default ImagesContainer
