import MoneyTree from "../components/MoneyTree/MoneyTree";
import BriefCase from "../components/BriefCase/BriefCase";
import Button from "../components/Button/Button";

const Game = (props) => {
  return (
    <div className="gameGrid bg-gray-200 dark:bg-gray-800 dark:text-gray-100">
      <div className="boxes p-5">
        <div className="text-center mb-3">
          {props.showInfo ? (
            props.boxCount.display ? (
              <h4 className="mb-2">Select Any {props.boxCount.count} Boxes</h4>
            ) : (
              <h4 className="mb-2">{props.boxCount.count} Boxes Remaining</h4>
            )
          ) : null}
          <Button name="Pause Game" onClick={props.onPause} />
          <Button name="Quit Game" onClick={props.onQuit} />
        </div>
        <div className="flex flex-wrap justify-center">
          <BriefCase />
        </div>
      </div>

      <MoneyTree
        items={props.leftTree}
        title
        className="moneyTreeLeft hidden lg:flex"
      />
      <MoneyTree
        items={props.rightTree}
        title
        className="moneyTreeRight hidden lg:flex"
      />
      <div className="block lg:hidden">
        <h4 className="pt-10 font-bold text-center bg-gray-100 dark:bg-gray-900 text-2xl">
          Money Tree
        </h4>
        <div className="flex flex-wrap justify-center">
          <MoneyTree
            items={props.leftTree}
            className="moneyTreeLeft flex w-6/12"
          />
          <MoneyTree
            items={props.rightTree}
            className="moneyTreeRight flex w-6/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
