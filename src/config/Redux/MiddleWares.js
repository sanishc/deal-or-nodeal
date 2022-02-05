export const themeMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const colorTheme = getState().app.colorTheme;
    localStorage.setItem("colorTheme", colorTheme);
    return result;
  };
};

export const reHydrateStore = () => {
  const theme = localStorage.getItem("colorTheme") || "light";
  document.documentElement.classList.add(theme);
  return {
    app: {
      colorTheme: theme,
      stage: localStorage.getItem("stage") || "start",
      events: { name: null, origin: null },
    },
    game: {
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
  };
};
