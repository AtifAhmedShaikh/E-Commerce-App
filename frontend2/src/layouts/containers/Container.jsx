import PropTypes from 'prop-types'
const Container = ({children,className}) => {
  return (
    <div className={`w-full ${className}`}>{children}</div>
  )
}
Container.propTypes={
    children:PropTypes.any,
    className:PropTypes.string,
}
export default Container