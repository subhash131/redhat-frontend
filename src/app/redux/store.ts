import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./features/ProductSlice";

const rootReducer = combineReducers({
  ProductReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
