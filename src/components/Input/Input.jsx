const Input = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border-2 p-2 border-gray-600 dark:border-white bg-gray-100 dark:bg-gray-800 filter shadow-lg rounded-lg placeholder-gray-500 dark:placeholder-gray-500 w-full md:max-w-lg mr-0 sm:mr-3"
    />
  );
};

export default Input;
