import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../../services/Socket/Socket";
import { useContext, useEffect } from "react";
import BriefCaseView from "./BriefCaseView";
import GameReducer from "../../config/Redux/Reducers/Game";
import AppReducer from "../../config/Redux/Reducers/App";

const BriefCase = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const { player, boxes, current, tradeBox } = useSelector(
    (state) => state.game
  );

  useEffect(() => {
    socket.on("tradingBoxSelected", (number) => {
      dispatch(GameReducer.setTradingBox(number));
    });
    socket.on("openedBox", (number) => {
      dispatch(GameReducer.openBox(number));
    });
    socket.on("completedLevel", () => {
      dispatch(
        AppReducer.createEvent({ name: "levelComplete", origin: false })
      );
    });
    return () => {
      socket.off("tradingBoxSelected");
      socket.off("openedBox");
      socket.off("completedLevel");
    };
  }, [dispatch, socket]);

  const actionOpenBox = (number) => {
    if (player.type !== "banker" && current.openBoxes < current.limit) {
      if (tradeBox.number === 0) {
        dispatch(GameReducer.setTradingBox(number));
        socket.emit("box:selected", player.room, number);
      } else {
        dispatch(GameReducer.openBox(number));
        socket.emit("box:opened", player.room, number);
        if (current.limit - current.openBoxes <= 1) {
          socket.emit("Level Complete", player.room);
          dispatch(
            AppReducer.createEvent({ name: "levelComplete", origin: true })
          );
        }
      }
    }
  };

  return boxes.map((box, index) => (
    <BriefCaseView
      key={index}
      number={index}
      amount={box.amount}
      open={box.opened}
      hide={tradeBox.number === index + 1}
      success={box.amount < 1000 ? true : false}
      onOpen={actionOpenBox}
    />
  ));
};

export default BriefCase;
