import PropTypes from 'prop-types'
const Heading = ({label}) => {
  return (
    <div className='flex justify-center items-center mt-4 pb-5'>
        <h1 className='text-3xl font-medium text-green-600  pb-1 px-6'>{label}</h1>
    </div>
  )
}
Heading.propTypes={
  label:PropTypes.string
}
export default Heading