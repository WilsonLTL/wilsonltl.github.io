// Actions
import { UPDATE_USER_TOKEN } from "../../../../store/actions/globalActions/userActions"
import { UPDATE_LOGINDIALOG_STATUS } from "../../../../store/actions/globalActions/dialogActions/loginDialogActions"
import { UPDATE_SNACK_BAR } from "../../../../store/actions/globalActions/snackBarActions"

export const onClickLoginListener = (dispatch) => {
  ethereumLoginHandler().then((res) => {
    if (typeof res[0] != undefined) {
      // Save Use Token into User Reducer
      dispatch({
        type: UPDATE_USER_TOKEN,
        payload: { token: res[0] }
      })
      // Turn Off Login Dialog
      dispatch({
        type: UPDATE_LOGINDIALOG_STATUS,
        payload: false
      })
      // Init Snackbar Message
      dispatch({
        type: UPDATE_SNACK_BAR,
        payload: {
          type: "success",
          message:"　成功登入"
        }
      })
    } else {
       // Init Snackbar Message
       dispatch({
        type: UPDATE_SNACK_BAR,
        payload: {
          type: "error",
          message:"登入失敗"
        }
      })
    }
  })
}

export const onClickCancelListener = (dispatch) => {
  // Turn Off Login Dialog
  dispatch({
    type: UPDATE_LOGINDIALOG_STATUS,
    payload: false
  })
}

async function ethereumLoginHandler() {
  // Login Via Metamask
  // @ts-ignore
  return await window.ethereum.request({ method: 'eth_requestAccounts' });
}