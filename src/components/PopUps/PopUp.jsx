import Button from "../Button/Button";

const PopUp = (props) => {
  return (
    <div className="flex fixed w-screen top-0 left-0 items-center justify-center h-screen bg-gray-600  bg-opacity-50">
      <div className="filter shadow-lg p-8 bg-gray-300 dark:bg-gray-800 text-gray-600 dark:text-white rounded-xl items-center justify-center flex-col text-center w-5/6 sm:w-2/4 lg:w-1/4">
        {props.children}
        <div className="mt-5">
          {props.button1 ? (
            <Button
              {...props.button1}
              onClick={props.button1.onClick}
              className="mb-0 w-44"
            />
          ) : null}
          {props.button2 ? (
            <Button
              {...props.button2}
              onClick={props.button2.onClick}
              className="mb-0 w-44"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
