import { PayloadAction } from "@reduxjs/toolkit";
import {
  OPEN_SNACK_BAR,
  CLOSE_SNACK_BAR,
  UPDATE_SNACK_BAR,
} from "../../../actions/globalActions/snackBarActions";
import { snackBarType } from "../../../types/globalType/snackBarType";

const initState: snackBarType = {
  status: false,
  message: "",
  type: "success",
  action: undefined
};

const snackBarReducer = (
  state = initState,
  action: PayloadAction<any>
) => {
  switch (action.type) {
    case OPEN_SNACK_BAR:
      state.status = true;
      return { ...state };
    case CLOSE_SNACK_BAR:
      state.status = false;
      return { ...state };
    case UPDATE_SNACK_BAR:
      state.status = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.action = action.payload.action;
      return { ...state };
    default:
      return { ...state };
  }
};

export default snackBarReducer;
