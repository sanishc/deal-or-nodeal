import { styled } from "@mui/material/styles";
import { Typography, ListItem } from "@mui/material";

export const MoneyTree = ({ amount }: { amount: number }) => {
  const CustomizedListItem = styled(ListItem)(
    ({ theme }) => `
    background-color: ${theme.palette.secondary.main};
    border-radius: 20px;
    max-width: 200px;
    margin: ${theme.spacing(0.5)};
  `
  );
  return (
    <CustomizedListItem>
      <Typography margin="0 auto">{amount}</Typography>
    </CustomizedListItem>
  );
};
