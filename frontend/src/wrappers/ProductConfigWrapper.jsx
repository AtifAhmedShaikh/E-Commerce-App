import React from 'react'
import { configurationWrapper } from "../styles/ProductDetails.module.css"
import PropTypes from 'prop-types'
const ProductConfigWrapper = ({ configuration={} }) => {
    return (
        <React.Fragment>
            <div className={configurationWrapper}>
                <h5>Product Configurations</h5>
                <ul>
                    {Object.keys(configuration).map((key) => {
                        return (
                            <li key={key}>
                                <span>{key}</span>
                                <span>{configuration[key]}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </React.Fragment>
    )
}
ProductConfigWrapper.propTypes = {
    configuration: PropTypes.object
}
export default ProductConfigWrapper
