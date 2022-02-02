import { RootState } from "src/services";
import { useSelector } from "react-redux";
import { GameScreen } from "src/app/pages/layouts";
import { GameCompletedView } from "src/app/pages/views";

export const Main = () => {
  const { gameComplete } = useSelector((state: RootState) => state);
  if (gameComplete) return <GameCompletedView />;
  return <GameScreen />;
};
