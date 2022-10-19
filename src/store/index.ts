import { useMemo } from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
// Reducer
import loadingReducer from "./reducers/globalReducer/loadingReducer";

let store: any;

function initStore(initialState: any) {
    const combineReducer = combineReducers({
      loadingReducer
    });

    return createStore(
      combineReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
  }

  export const initializeStore = (preloadedState: any) => {
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
  
  export function useStore(initialState: any) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
  }
  