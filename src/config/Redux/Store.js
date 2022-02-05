import { configureStore } from "@reduxjs/toolkit";
import { reducer as AppReducer } from "./Reducers/App";
import { reducer as GameReducer } from "./Reducers/Game";
import { themeMiddleware, reHydrateStore } from "./MiddleWares";

export default configureStore({
  reducer: {
    app: AppReducer,
    game: GameReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(themeMiddleware),
  devTools: true,
});
