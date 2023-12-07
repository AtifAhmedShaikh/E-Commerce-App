import PropTypes from 'prop-types'
const Button = ({children,type="button",className,onClick}) => {
    return (
    <button type={type} className={`${className}`} onClick={onClick} >
        {children}
    </button>
  )
}
Button.propTypes={
    children:PropTypes.any,
    bgColor:PropTypes.string,
    className:PropTypes.string,
    type:PropTypes.string,
    onClick:PropTypes.func,
}
export default Button