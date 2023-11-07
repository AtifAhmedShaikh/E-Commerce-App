import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types'

const Loader = ({ size = "" }) => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <Spinner variant="info" animation="border" role="status" size={size}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}
Loader.propTypes = {
  size: PropTypes.string
}
export default Loader
