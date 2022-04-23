import { PayloadAction } from "@reduxjs/toolkit";
import { UPDATE_LOGINDIALOG_STATUS } from "../../../../actions/globalActions/dialogActions/loginDialogActions"
import { loginDialogType } from "../../../../types/globalType/dialogType/loginDialogType";

const initState: loginDialogType = {
  status: false
};

const loginDialogReducer = (state = initState, action: PayloadAction<any>) => {
  switch (action.type) {
    case UPDATE_LOGINDIALOG_STATUS:
      state.status = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default loginDialogReducer;
