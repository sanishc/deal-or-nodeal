import { useState } from "react";

const ToggleButton = ({ onClick }) => {
  const [state, setState] = useState(
    localStorage.getItem("colorTheme") === "dark" || false
  );

  const handleSwitch = () => {
    setState(!state);
    onClick();
  };

  return (
    <div
      className="w-12 border-2 rounded-xl p-1 border-gray-700 dark:border-gray-200 cursor-pointer"
      onClick={handleSwitch}
    >
      <div
        className={`bg-gray-900 dark:bg-gray-50 w-3 h-3 rounded-full ${
          state ? "transform translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
