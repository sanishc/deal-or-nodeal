import Button from "../components/Button/Button";

const Player = ({ onBanker, onPlayer, onBack }) => {
  return (
    <div className="h-screen flex items-center flex-col justify-center dark:bg-gray-800 dark:text-gray-100">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl">Choose Your Side</h1>
      <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row">
        <Button name="Banker" onClick={onBanker} className="w-44" />
        <Button name="Contestent" onClick={onPlayer} className="w-44" />
      </div>
      <Button name="Go Back" onClick={onBack} link />
    </div>
  );
};

export default Player;
