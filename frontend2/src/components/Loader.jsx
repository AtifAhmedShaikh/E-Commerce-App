import { BeatLoader } from "react-spinners";

const Loader = () => {
  return <div className="text-center mt-3">
    <BeatLoader color="#36d7b7" loading={true} speedMultiplier={1} size="15px"   aria-label="Loading Spinner"
        data-testid="loader"/>
  </div>
};
export default Loader;
