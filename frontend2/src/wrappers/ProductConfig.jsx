import React from "react";
import PropTypes from "prop-types";
const ProductConfig = ({ configuration }) => {
  return (
    <React.Fragment>
        <div className="my-2 ml-2">
      {Object.keys(configuration).map((item) => {
        return (
          <div
            key={item}
            className="flex justify-between items-between pb-1 px-2 border mb-1 hover:bg-gray-100"
          >
            <span>{item}</span>
            <span>{configuration[item]}</span>
          </div>
        );
      })}
        </div>
    </React.Fragment>
  );
};
ProductConfig.propTypes = {
  configuration: PropTypes.object,
};
export default ProductConfig;
