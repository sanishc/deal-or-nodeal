import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const Connect = ({
  onJoin,
  showJoin,
  onNew,
  onBack,
  gameCode,
  gameCodeChange,
}) => {
  return (
    <div className="h-screen flex items-center flex-col justify-center dark:bg-gray-800 dark:text-gray-100">
      <div className="flex items-center flex-col sm:flex-row w-11/12 justify-center">
        <Input
          value={gameCode}
          onChange={gameCodeChange}
          placeholder="Enter Game Code"
        />
        <Button
          name="JOIN"
          className="mt-5 sm:mt-2 w-full sm:w-44"
          onClick={onJoin}
        />
      </div>
      <Button
        name="Start New Game"
        className="w-11/12 sm:w-44 sm:mt-14"
        onClick={onNew}
      />
      <Button name="Go Back" link onClick={onBack} />
    </div>
  );
};

export default Connect;
