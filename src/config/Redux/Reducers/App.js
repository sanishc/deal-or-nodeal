import { createSlice } from "@reduxjs/toolkit";

export const App = createSlice({
  name: "App State",
  initialState: {
    colorTheme: "light",
    stage: "start",
    events: { name: null, origin: null },
  },
  reducers: {
    changeColorTheme: (state) => {
      const newTheme = state.colorTheme === "light" ? "dark" : "light";
      document.documentElement.classList.remove(state.colorTheme);
      document.documentElement.classList.add(newTheme);
      state.colorTheme = newTheme;
    },

    switchStage: (state, { payload }) => {
      state.stage = payload;
    },

    createEvent: (state, { payload }) => {
      console.log("Event Created", payload);
      state.events = payload;
    },
  },
});

export const { reducer } = App;
export default App.actions;
