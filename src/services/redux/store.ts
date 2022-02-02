import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./slices";

export const Store = configureStore({
  reducer: slice.reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
