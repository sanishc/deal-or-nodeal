import Button from "../components/Button/Button";

const Start = ({ onStart }) => {
  return (
    <div className="h-screen flex items-center flex-col justify-center dark:bg-gray-800 dark:text-gray-100">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl">Welcome</h1>
      <div className="mt-10">
        <Button name="Let's Start" onClick={onStart} className="w-44" />
      </div>
    </div>
  );
};

export default Start;
