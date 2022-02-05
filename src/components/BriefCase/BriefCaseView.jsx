const BriefCaseView = ({ number, amount, success, open, hide, onOpen }) => {
  const handleClick = () => {
    if (!open) onOpen(number);
  };
  return (
    <div
      className={`w-32 h-32 m-2 filter shadow-lg rounded-lg flex flex-col items-center justify-center relative overflow-hidden ${
        open
          ? success
            ? "bg-green-500 dark:bg-green-600"
            : "bg-red-700 dark:bg-red-800"
          : ""
      } ${hide ? "hidden" : ""}`}
      onClick={handleClick}
    >
      <div
        className={`text-3xl absolute w-full h-full flex flex-col items-center  justify-center bg-gray-50 dark:bg-gray-700 transition-all ease-in-out transform ${
          open ? "translate-y-40 scale-50 rotate-90 duration-700" : ""
        }`}
      >
        {number + 1}
      </div>
      <span className="text-2xl text-white">{amount}</span>
    </div>
  );
};

export default BriefCaseView;
