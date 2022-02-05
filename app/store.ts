/** EXTERNALS **/

import { configureStore } from "@reduxjs/toolkit";

/** MAIN **/

// Load state from local storage.
const jsonState = localStorage.getItem("state");
const preloadedState = jsonState ? JSON.parse(jsonState) : undefined;

export const store = configureStore({
  preloadedState,
  reducer: {
    // TODO
  },
});

// Update local storage with state.
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("state", JSON.stringify(state));
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
