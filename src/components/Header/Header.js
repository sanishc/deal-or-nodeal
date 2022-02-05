import { useDispatch, useSelector } from "react-redux";
import AppReducer from "../../config/Redux/Reducers/App";
import HeaderView from "./HeaderView";

const Header = () => {
  const dispatch = useDispatch();

  const { stage } = useSelector((state) => state.app);
  const { current, tradeBox, player } = useSelector((state) => state.game);

  const toggleColorTheme = () => {
    dispatch(AppReducer.changeColorTheme());
  };

  return (
    <HeaderView
      changeTheme={toggleColorTheme}
      game={{
        display: stage === "game",
        round: current.level,
        box: tradeBox.number,
        player: player.type,
      }}
    />
  );
};

export default Header;
