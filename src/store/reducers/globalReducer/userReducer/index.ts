import { PayloadAction } from "@reduxjs/toolkit";
import { UPDATE_USER_TOKEN } from "../../../actions/globalActions/userActions";
import { userType } from "../../../types/globalType/userType";

const initState: userType = {
  token: ''
};

const userReducer = (state = initState, action: PayloadAction<any>) => {
  switch (action.type) {
    case UPDATE_USER_TOKEN:
      state.token = action.payload.token
      return { ...state };
    default:
      return { ...state };
  }
};

export default userReducer;
