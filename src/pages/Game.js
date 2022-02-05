import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { SocketContext } from "../services/Socket/Socket";
import AppReducer from "../config/Redux/Reducers/App";
import GameView from "../views/Game";

const Game = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const { moneyTree, player, current } = useSelector((state) => state.game);
  const { stage } = useSelector((state) => state.app);

  const actionPause = () => {
    socket.emit("action:pause", player.room);
    dispatch(AppReducer.createEvent({ name: "pause", origin: true }));
  };

  const actionQuit = () => {
    dispatch(AppReducer.createEvent({ name: "quit", origin: true }));
  };

  if (stage === "game") {
    return (
      <GameView
        leftTree={moneyTree.left}
        rightTree={moneyTree.right}
        showInfo={player.type !== "banker"}
        boxCount={{
          display: current.openBoxes === 0,
          count: current.limit - current.openBoxes,
        }}
        onPause={actionPause}
        onQuit={actionQuit}
      />
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default Game;
