import React from 'react'
import PropTypes from "prop-types"
const Container = ({children,className="",style={}}) => {
  return (
    <React.Fragment>
        <div className={`container-fluid d-flex ${className}`} style={style}>
            {children}
        </div>
    </React.Fragment>
  )
}
Container.propTypes={
    className:PropTypes.string,
    style:PropTypes.object,
    children:PropTypes.any,
}
export default Container
