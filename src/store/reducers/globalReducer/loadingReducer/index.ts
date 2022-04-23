import { PayloadAction } from "@reduxjs/toolkit";
import { UPDATE_LOADING_STATUS } from "../../../actions/globalActions/loadingActions";
import { loadingType } from "../../../types/globalType/loadingType";

const initState: loadingType = {
  status: false
};

const loadingReducer = (state = initState, action: PayloadAction<any>) => {
  switch (action.type) {
    case UPDATE_LOADING_STATUS:
      state.status = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default loadingReducer;
