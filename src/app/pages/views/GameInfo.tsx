import { RootState } from "src/services";
import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";

export const GameInfoView = () => {
  const { round, limit, remainingBoxes, tradeBoxAmount } = useSelector(
    (state: RootState) => state
  );

  const generateText = () => {
    if (limit === remainingBoxes)
      return `You can open ${remainingBoxes} boxes in this round`;
    return `${remainingBoxes} ${
      remainingBoxes === 1 ? "more box" : "boxes"
    } remaining`;
  };

  if (tradeBoxAmount === 0)
    return (
      <Typography textAlign="center" variant="h4" my={5}>
        Pick one box as your Tradebox
      </Typography>
    );

  return (
    <Box my={5}>
      <Typography textAlign="center" variant="h4">
        Round {round}
      </Typography>
      <Typography textAlign="center" variant="subtitle1">
        {generateText()}
      </Typography>
    </Box>
  );
};
