import { Grid } from "@mui/material";
import { RootState } from "src/services";
import { useSelector } from "react-redux";
import {
  GameInfoView,
  LevelCompleteView,
  BoxesView,
  MoneyTreeView,
} from "src/app/pages/views";

export const GameScreen = () => {
  const { roundComplete } = useSelector((state: RootState) => state);

  return (
    <Grid container py={5}>
      <Grid item xs={12}>
        {roundComplete ? <LevelCompleteView /> : <GameInfoView />}
      </Grid>
      <Grid item xs={12} lg={10}>
        <BoxesView />
      </Grid>
      <Grid item xs={12} lg={2}>
        <MoneyTreeView />
      </Grid>
    </Grid>
  );
};
