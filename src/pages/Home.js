import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SocketContext } from "../services/Socket/Socket";
import { useContext, useEffect } from "react";
import AppReducer from "../config/Redux/Reducers/App";
import GameReducer from "../config/Redux/Reducers/Game";
import Start from "../views/Start";
import Player from "../views/Player";
import Connect from "../views/Connect";

const Home = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const { stage } = useSelector((state) => state.app);
  const { player } = useSelector((state) => state.game);

  useEffect(() => {
    socket.on("connect", () => {
      dispatch(GameReducer.updatePlayer({ id: socket.id }));
    });

    socket.on("newRoom", (room) => {
      dispatch(GameReducer.updatePlayer({ room: room }));
      dispatch(AppReducer.createEvent({ name: "waitPlayer", origin: true }));
    });

    socket.on("startGame", (payload) => {
      console.log("startGame");
      dispatch(GameReducer.generateGameAssets(payload));
      dispatch(AppReducer.createEvent({ name: null, origin: null }));
      dispatch(AppReducer.switchStage("game"));
    });

    return () => {
      socket.off("connect");
      socket.off("startGame");
    };
  }, [socket, dispatch, player.room]);

  const updateStage = () => {
    if (stage === "start") {
      dispatch(AppReducer.switchStage("player"));
      localStorage.setItem("stage", "player");
    } else if (stage === "player") {
      dispatch(AppReducer.switchStage("connect"));
      localStorage.setItem("stage", "connect");
    }
  };

  const actionSwitchBack = () => {
    if (stage === "player") {
      dispatch(AppReducer.switchStage("start"));
      localStorage.setItem("stage", "start");
    } else if (stage === "connect") {
      dispatch(AppReducer.switchStage("player"));
      localStorage.setItem("stage", "player");
    }
  };

  const actionBanker = () => {
    dispatch(GameReducer.updatePlayer({ type: "banker" }));
    updateStage();
  };

  const actionPlayer = () => {
    dispatch(GameReducer.updatePlayer({ type: "contestent" }));
    updateStage();
  };

  const actionJoinGame = () => {
    if (!player.id) socket.connect();
    socket.emit("JoinGame", player.room);
  };

  const actionNewGame = () => {
    socket.connect();
    socket.emit("NewGame");
  };

  const updatePlayerRoom = (e) => {
    dispatch(GameReducer.updatePlayer({ room: e.target.value }));
  };

  switch (stage) {
    case "start":
      return <Start onStart={updateStage} />;
    case "player":
      return (
        <Player
          onBanker={actionBanker}
          onPlayer={actionPlayer}
          onBack={actionSwitchBack}
        />
      );
    case "connect":
      return (
        <Connect
          onJoin={actionJoinGame}
          onNew={actionNewGame}
          onBack={actionSwitchBack}
          gameCode={player.room}
          gameCodeChange={updatePlayerRoom}
        />
      );
    case "game":
      return <Redirect to="/game" />;
    default:
      return null;
  }
};

export default Home;
