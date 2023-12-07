import PropTypes from 'prop-types'
const Container = ({children,className}) => {
  return (
    <div className={`w-full min-h-[65vh] ${className}`}>{children}</div>
  )
}
Container.propTypes={
    children:PropTypes.any,
    className:PropTypes.string,
}
export default Container