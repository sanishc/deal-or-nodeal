import { Box } from "src/interfaces";
import { Stack } from "@mui/material";
import { BreifCase } from "src/app/components";
import { RootState, reducers } from "src/services";
import { useSelector, useDispatch } from "react-redux";

export const BoxesView = () => {
  const { boxes, roundComplete, tradeBoxAmount } = useSelector(
    (state: RootState) => state
  );
  const dispatch = useDispatch();

  const handleClick = (box: Box) => {
    if (tradeBoxAmount === 0) {
      dispatch(reducers.selectBox(boxes.indexOf(box)));
    } else {
      if (!roundComplete) dispatch(reducers.openBox(boxes.indexOf(box)));
    }
  };

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center">
      {boxes.map((box, index) => (
        <BreifCase box={box} key={index} onClick={handleClick} />
      ))}
    </Stack>
  );
};
