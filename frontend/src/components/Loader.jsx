import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types'

const Loader = ({ size = "" ,label="",fontSize="11px"}) => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <Spinner variant="info" animation="border" role="status" size={size}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <span className='' style={{fontSize:fontSize}}>Please wait {label}</span>
    </div>
  )
}
Loader.propTypes = {
  size: PropTypes.string,
  label: PropTypes.string,
  fontSize: PropTypes.string,
}
export default Loader