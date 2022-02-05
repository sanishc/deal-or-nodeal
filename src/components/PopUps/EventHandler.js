import { useDispatch } from "react-redux";
import { useEffect, useContext } from "react";
import { SocketContext } from "../../services/Socket/Socket";
import AppReducer from "../../config/Redux/Reducers/App";
import GameReducer from "../../config/Redux/Reducers/Game";
import DialogEmitter from "./DialogEmitter";

const EventHandler = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("gamePaused", () => {
      dispatch(AppReducer.createEvent({ name: "pause", origin: false }));
    });
    socket.on("gameResumed", () => {
      console.log("gameResumed");
      dispatch(AppReducer.createEvent({ name: null, origin: null }));
    });
    socket.on("gameEnded", () => {
      dispatch(AppReducer.createEvent({ name: "quit", origin: false }));
    });
    socket.on("completedLevel", () => {
      dispatch(
        AppReducer.createEvent({ name: "levelComplete", origin: false })
      );
    });

    socket.on("offerPlaced", (amount) => {
      dispatch(GameReducer.updateOffer(amount));
    });

    socket.on("offerAccepted", () => {
      dispatch(GameReducer.acceptOffer());
      dispatch(AppReducer.createEvent({ name: "gameOver", origin: false }));
    });

    socket.on("offerDeclined", () => {
      dispatch(GameReducer.levelCompleted());
      dispatch(AppReducer.createEvent({ name: null, origin: null }));
    });

    socket.on("tradeBoxWon", () => {
      dispatch(GameReducer.wonTradeBox());
      dispatch(AppReducer.createEvent({ name: "gameOver", origin: false }));
    });

    return () => {
      socket.off("gameEnded");
      socket.off("gamePaused");
      socket.off("gameResumed");
      socket.off("completedLevel");
      socket.off("offerPlaced");
      socket.off("offerAccepted");
      socket.off("offerDeclined");
      socket.off("tradeBoxWon");
    };
  }, [dispatch, socket]);

  return <DialogEmitter />;
};

export default EventHandler;
