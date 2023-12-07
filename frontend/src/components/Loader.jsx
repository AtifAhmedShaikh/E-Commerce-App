import { BeatLoader } from "react-spinners";
import PropTypes from 'prop-types'
const Loader = ({label="Loading Please wait..."}) => {
  return <div className="text-center mt-3">
    <BeatLoader color="#36d7b7" loading={true} speedMultiplier={1} size="15px"   aria-label="Loading Spinner"
        data-testid="loader"/>
        <p className="text-center text-sm font-bold">
          {label}
        </p>
  </div>
};
Loader.propTypes={
  label:PropTypes.string,
}
export default Loader;