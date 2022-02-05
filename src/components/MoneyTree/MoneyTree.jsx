const MoneyTree = ({ items, className, title }) => {
  return (
    <div
      className={`bg-gray-100 dark:bg-gray-900 p-2 flex flex-col items-center py-5 ${className} mb-3`}
    >
      {title ? (
        <h4 className="my-3 font-bold text-center">Money Tree</h4>
      ) : null}
      {items.map((num) => (
        <div
          className="p-2 m-2 rounded-xl bg-gray-300 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-center w-11/12 md:w-8/12 lg:w-40 xl:w-48"
          key={num}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default MoneyTree;
