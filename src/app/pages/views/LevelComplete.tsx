import { RootState, reducers } from "src/services";
import { useSelector, useDispatch } from "react-redux";
import { Button, Stack, Typography, Box } from "@mui/material";

export const LevelCompleteView = () => {
  const { offerAmount } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const actionDeal = () => {
    dispatch(reducers.offerAccepted());
  };

  const actionNoDeal = () => {
    dispatch(reducers.offerRejected());
  };

  return (
    <Box py={10}>
      <Typography textAlign="center" variant="h4">
        Offer From Banker {offerAmount}
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={2}
      >
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={actionDeal}
        >
          Deal
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={actionNoDeal}
        >
          NoDeal
        </Button>
      </Stack>
    </Box>
  );
};
