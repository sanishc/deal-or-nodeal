import { RootState } from "src/services";
import { useSelector } from "react-redux";
import { MoneyTree } from "src/app/components";
import { Typography, Stack } from "@mui/material";

export const MoneyTreeView = () => {
  const { moneyTree } = useSelector((state: RootState) => state);

  return (
    <>
      <Typography textAlign="center" variant="h5">
        Money Tree
      </Typography>
      <Stack direction={{ xs: "row", lg: "column" }} sx={Stacksx}>
        {moneyTree.map((amount, index) => (
          <MoneyTree key={index} amount={amount} />
        ))}
      </Stack>
    </>
  );
};

const Stacksx = {
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  py: 2,
};
