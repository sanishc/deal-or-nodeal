import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { SocketContext } from "../../services/Socket/Socket";
import AppReducer from "../../config/Redux/Reducers/App";
import GameReducer from "../../config/Redux/Reducers/Game";
import PauseGame from "./PauseGame";
import QuitGame from "./QuitGame";
import WaitPlayer from "./WaitPlayer";
import LevelComplete from "./LevelComplete";
import GameOver from "./GameOver";

const DialogEmitter = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const { events, stage } = useSelector((state) => state.app);
  const { player, current, amountWon, tradeBox } = useSelector(
    (state) => state.game
  );

  const handleGameComplete = () => {
    dispatch(AppReducer.createEvent({ name: null, origin: null }));
    dispatch(GameReducer.resetGame());
    dispatch(AppReducer.switchStage("connect"));
  };

  const actionResume = () => {
    if (stage === "game") socket.emit("action:resume", player.room);
    dispatch(AppReducer.createEvent({ name: null, origin: null }));
  };

  const actionQuit = () => {
    if (events.origin) socket.emit("action:quit", player.room);
    handleGameComplete();
  };

  const actionSend = () => {
    socket.emit("Offer", player.room, current.offer);
    dispatch(GameReducer.setOfferStatus("sent"));
  };

  const handleAmountChange = (e) => {
    dispatch(GameReducer.updateOffer(e.target.value));
  };

  const actionDeal = () => {
    dispatch(GameReducer.acceptOffer());
    socket.emit("game:deal", player.room);
    dispatch(AppReducer.createEvent({ name: "gameOver", origin: true }));
  };

  const actionNoDeal = () => {
    if (current.level === 9) {
      socket.emit("game:end", player.room);
      dispatch(GameReducer.wonTradeBox());
      dispatch(AppReducer.createEvent({ name: "gameOver", origin: true }));
    } else {
      socket.emit("game:nodeal", player.room);
      dispatch(GameReducer.levelCompleted());
      dispatch(AppReducer.createEvent({ name: null, origin: null }));
    }
  };

  switch (events.name) {
    case "pause":
      return (
        <PauseGame
          buttons={events.origin}
          onResume={actionResume}
          onQuit={actionQuit}
        />
      );

    case "quit":
      return (
        <QuitGame
          buttons={events.origin}
          onResume={actionResume}
          onQuit={actionQuit}
        />
      );

    case "waitPlayer":
      return <WaitPlayer room={player.room} onClose={actionResume} />;

    case "levelComplete":
      return (
        <LevelComplete
          banker={!events.origin}
          status={current.status}
          amount={current.offer}
          OnAmountChange={handleAmountChange}
          onSend={actionSend}
          offer={current.offer}
          onDeal={actionDeal}
          onNoDeal={actionNoDeal}
          onContinue={actionResume}
        />
      );
    case "gameOver":
      return (
        <GameOver
          onExit={handleGameComplete}
          tradeAmount={tradeBox.amount}
          amountWon={amountWon}
          banker={!events.origin}
        />
      );

    default:
      return null;
  }
};

export default DialogEmitter;
