import PropTypes from "prop-types";
const FormInput = ({
  value,
  handler,
  label,
  name,
  type,
  error,
  errorMessage,
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-bold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={label}
          name={name}
          type={type}
          onChange={handler}
          autoComplete="off"
          value={value}
          required
          className="w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-none sm:text-sm sm:leading-6"
        />
        {error && <p className="text-red-700 font-sm">{errorMessage}</p>}
      </div>
    </div>
  );
};
FormInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  handler: PropTypes.func,
  error: PropTypes.bool,
};
export default FormInput;
