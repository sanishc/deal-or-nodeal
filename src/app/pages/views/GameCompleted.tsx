import { RootState } from "src/services";
import { useSelector } from "react-redux";
import { Stack, Typography, Button } from "@mui/material";

export const GameCompletedView = () => {
  const { amountWon, playerWon } = useSelector((state: RootState) => state);

  return (
    <Stack
      height="100vh"
      alignItems="center"
      justifyContent="center"
      spacing={5}
    >
      <Typography variant="h2">
        {playerWon ? "Congratulations" : "Better luck next time"}
      </Typography>
      <Typography variant="h4">You Win: {amountWon}</Typography>
      <Button
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 300 }}
        component="a"
        href="/deal-or-nodeal/"
      >
        Play Again
      </Button>
    </Stack>
  );
};
