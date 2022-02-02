import { BreifCaseProps } from "src/interfaces";
import { Box, Typography, styled } from "@mui/material";

export const BreifCase = ({ box, onClick }: BreifCaseProps) => {
  const CustomizedBox = styled(Box)(
    ({ theme }) => `
    background-color: ${
      box.opened
        ? box.amount > 1000
          ? theme.palette.error.dark
          : theme.palette.success.dark
        : theme.palette.secondary.main
    };
    color: ${theme.palette.primary.main};
    margin: ${theme.spacing(1)};
    border-radius: 10px;
    width: 200px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  );

  const handleClick = () => {
    if (!box.opened) onClick(box);
  };

  return (
    <CustomizedBox onClick={handleClick}>
      <Typography variant="h3">
        {box.opened ? box.amount : box.number}
      </Typography>
    </CustomizedBox>
  );
};
