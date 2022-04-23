import { useMemo } from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
// Reducer
import articlePageReducer from "./reducers/articlePageReducer";
import createrPageReducer from "./reducers/createrPageReducer";
import loadingReducer from "./reducers/globalReducer/loadingReducer";
import loginDialogReducer from "./reducers/globalReducer/dialogReducer/loginDialogReducer";
import homePageReducer from "./reducers/homePageReducer";
import snackBarReducer from "./reducers/globalReducer/snackBarReducer";
import userReducer from "./reducers/globalReducer/userReducer";

let store;

function initStore(initialState) {
  const combineReducer = combineReducers({
    articlePageReducer,
    createrPageReducer,
    loadingReducer,
    loginDialogReducer,
    homePageReducer,
    snackBarReducer,
    userReducer,
  });
  return createStore(
    combineReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
