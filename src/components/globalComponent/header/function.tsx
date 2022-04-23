// Actions
import { UPDATE_LOGINDIALOG_STATUS } from "../../../store/actions/globalActions/dialogActions/loginDialogActions"

export const onClickLoginListener = (dispatch) => {
  dispatch({
    type: UPDATE_LOGINDIALOG_STATUS,
    payload: true
  })
}