import { createSlice } from "@reduxjs/toolkit";

export const App = createSlice({
  name: "Game State",
  initialState: {
    player: { id: null, type: null, room: "" },
    moneyTree: { left: [], right: [] },
    boxes: [],
    tradeBox: { number: 0, amount: 0 },
    current: {
      level: 1,
      openBoxes: 0,
      limit: 6,
      offer: "",
      status: null,
    },
    amountWon: 0.0,
  },
  reducers: {
    updatePlayer: (state, { payload }) => {
      state.player = { ...state.player, ...payload };
    },
    generateGameAssets: (state, { payload }) => {
      console.log("assets", payload.moneyTree);
      state.boxes = payload.boxes.map((amount) => ({
        amount: amount,
        open: false,
      }));
      state.moneyTree = payload.moneyTree;
    },
    openBox: (state, { payload }) => {
      state.boxes[payload].opened = true;
      const amount = state.boxes[payload].amount;
      let index = state.moneyTree.left.indexOf(amount);
      if (index === -1) {
        index = state.moneyTree.right.indexOf(amount);
        if (index !== -1) state.moneyTree.right.splice(index, 1);
      } else {
        state.moneyTree.left.splice(index, 1);
      }
      state.current.openBoxes++;
    },
    setTradingBox: (state, { payload }) => {
      state.tradeBox = {
        number: payload + 1,
        amount: state.boxes[payload].amount,
      };
    },
    resetGame: (state) => {
      state.player = { id: null, type: null, room: null };
      state.moneyTree = { left: [], right: [] };
      state.boxes = [];
      state.tradeBox = { number: 0, amount: 0 };
      state.current = {
        level: 1,
        openBoxes: 0,
        limit: 6,
        offer: "",
        status: null,
      };
      state.amountWon = 0.0;
    },
    updateOffer: (state, { payload }) => {
      state.current.offer = payload;
    },
    setOfferStatus: (state, { payload }) => {
      console.log("Status Update", payload);
      state.current.status = payload;
    },
    levelCompleted: (state) => {
      state.current = {
        level: state.current.level + 1,
        openBoxes: 0,
        limit: state.current.limit !== 1 ? state.current.limit - 1 : 1,
        offer: "",
        status: null,
      };
    },
    acceptOffer: (state) => {
      state.amountWon = state.current.offer;
    },
    wonTradeBox: (state) => {
      state.amountWon = state.tradeBox.amount;
    },
  },
});

export const { reducer } = App;
export default App.actions;
