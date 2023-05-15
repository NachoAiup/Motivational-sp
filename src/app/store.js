import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "../features/backgroundImage/imagesSlice";
import goalsReducer from "../features/goals/goalsSlice";
import quotesReducer from "../features/quotes/quotesSlice";

export default configureStore({
  reducer: {
    quotes: quotesReducer,
    images: imagesReducer,
    goals: goalsReducer,
  },
});
