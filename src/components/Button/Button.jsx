const Button = (props) => {
  return props.link ? (
    <button
      onClick={props.onClick}
      className={`${props.className} mt-10 underline`}
    >
      {props.name}
    </button>
  ) : (
    <button
      onClick={props.onClick}
      id={props.id}
      className={`${props.className} border-2 border-gray-600 dark:border-white p-2 m-2 filter shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800  dark:hover:bg-gray-700`}
    >
      {props.name}
    </button>
  );
};
export default Button;
