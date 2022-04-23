// Library
import { useDispatch, useSelector } from "react-redux";
import UseTranslation from "next-translate/useTranslation";


// Page Compontent
import LoginDialogCompontent from "./LoginDialogCompontent"

export const LoginDialog = () => {
  const { t } = UseTranslation("common");
  const loginDialog = useSelector((state: any) => state.loginDialogReducer);
  const dispatch = useDispatch();

  return (<LoginDialogCompontent t={t} dispatch={dispatch} loginDialog={loginDialog} />)
}