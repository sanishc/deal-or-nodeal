import PopUp from "./PopUp";

const GameOver = ({ banker, onExit, tradeAmount, amountWon }) => {
  if (banker) {
    return (
      <PopUp button1={{ name: "Exit", onClick: onExit }}>
        <h1 className="text-3xl font-bold mb-3">Game Complete</h1>
        <p className="text-xl">
          Contestent Won:{" "}
          <span className="text-3xl font-semibold my-3 block">
            ₹ {amountWon}
          </span>
        </p>
        {amountWon === tradeAmount ? null : (
          <p className="text-lg">
            You Got <span className="font-semibold">₹ {tradeAmount}</span>
          </p>
        )}
      </PopUp>
    );
  } else {
    return (
      <PopUp button1={{ name: "Exit", onClick: onExit }}>
        <h1 className="text-3xl font-bold mb-3">Game Complete</h1>
        <p className="text-xl">
          You Won:{" "}
          <span className="text-3xl font-semibold my-3 block">
            ₹ {amountWon}
          </span>
        </p>
        {amountWon === tradeAmount ? null : (
          <p className="text-lg">
            Your Box Was Containing{" "}
            <span className="font-semibold">₹ {tradeAmount}</span>
          </p>
        )}
      </PopUp>
    );
  }
};

export default GameOver;
