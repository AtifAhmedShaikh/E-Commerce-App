import PropTypes from 'prop-types'

const RatingStars = ({rating}) => {
  const generateStars = () => {
    const stars = [];
    const maxRating = 5;
    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            stars.push(<i key={i} className='bx bxs-star'></i>);
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<i key={i} className='bx bxs-star-half'></i>);
        } else {
            stars.push(<i key={i} className='bx bx-star'></i>);
        }
    }
    return stars;
};
  return (
    <div className='stars-container'>
      <span style={{ fontSize: "11px" }}>{rating}</span>
       {generateStars()}
    </div>
  )
}
RatingStars.propTypes={
  rating:PropTypes.number
}
export default RatingStars
