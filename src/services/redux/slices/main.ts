import { createSlice } from "@reduxjs/toolkit";
import { Variables } from "src/config";
import { shuffleArray } from "src/utils";
import { AppState } from "src/interfaces";

const initialState: AppState = {
  round: 1,
  boxes: shuffleArray(Variables.moneyTree).map((amount, index) => ({
    number: index + 1,
    amount: amount,
    opened: false,
  })),
  moneyTree: Variables.moneyTree.sort((a, b) => a - b),
  limit: 6,
  remainingBoxes: 6,
  roundComplete: false,
  offerAmount: 0,
  gameComplete: false,
  amountWon: 0,
  tradeBoxAmount: 0,
  playerWon: false,
};

export const slice = createSlice({
  name: "App",
  initialState,
  reducers: {
    openBox: (state, actions: { payload: number }) => {
      state.boxes[actions.payload].opened = true;
      const amount = state.boxes[actions.payload].amount;
      state.moneyTree.splice(state.moneyTree.indexOf(amount), 1);
      state.remainingBoxes -= 1;
      if (state.remainingBoxes === 0) {
        state.round += 1;
        state.limit = state.limit !== 1 ? state.limit - 1 : 1;
        state.remainingBoxes = state.limit;
        state.roundComplete = true;
        //todo: offer logic
        const minAmt = state.moneyTree[0];
        const maxAmount = state.moneyTree[state.moneyTree.length - 1];
        const percent = Math.floor(Math.random() * (98 - 13) + 13);
        state.offerAmount = Math.round(
          ((minAmt + maxAmount) / 2) * (percent / 100)
        );
      }
    },
    selectBox: (state, actions: { payload: number }) => {
      state.tradeBoxAmount = state.boxes[actions.payload].amount;
      state.boxes.splice(actions.payload, 1);
    },
    offerAccepted: (state) => {
      state.amountWon = state.offerAmount;
      state.gameComplete = true;
      state.playerWon = state.offerAmount > state.tradeBoxAmount;
    },
    offerRejected: (state) => {
      if (state.round === 10) {
        state.gameComplete = true;
        state.amountWon = state.tradeBoxAmount;
        state.playerWon = state.tradeBoxAmount > state.offerAmount;
      } else {
        state.roundComplete = false;
      }
    },
  },
});
