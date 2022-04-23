// React
import React from "react";
// Mui
import { useTheme as UseTheme } from "@mui/material/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  useMediaQuery as UseMediaQuery,
} from "@mui/material";
import { AccountBalanceWalletOutlined, ExpandMore } from "@mui/icons-material";
// function
import { onClickLoginListener, onClickCancelListener } from "./function"

const LoginDialogCompontent = ({ t, dispatch, loginDialog }) => {
  const theme = UseTheme();
  const fullScreen = UseMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={loginDialog.status}
      onClose={() => onClickCancelListener(dispatch)}
      fullScreen={fullScreen}
    >
      <DialogTitle className="border-b text-center font-semibold">{ t('entries') }</DialogTitle>
      <DialogContent className="mt-4 space-y-4">
        <DialogContentText className="w-96 text-sm text-gray-400 font-semibold space-x-2">
          { t('select_your_entry') }
        </DialogContentText>
        <DialogContentText className="w-96">
          <Accordion className="bg-gray-100">
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="flex flex-col">
                <div className="flex items-center"><AccountBalanceWalletOutlined/> { t('continue_with_wallet') }</div>
                <p className="text-sm text-gray-400">{ t('for_unregistered_or_users_enabled_wallet_login') }</p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col space-y-4">
                <Button onClick={() => onClickLoginListener(dispatch)} className="bg-white w-full space-x-2 shadow">
                  {/* <Image alt="" width={30} height={30} src="/assets/MetaMask_Fox.png"/> */}
                  <span className="text-black text-xs font-bold">MetaMask</span>
                </Button>
                {
                 // @ts-ignore
                 typeof window !== 'undefined' && typeof window.ethereum === 'undefined' && <p className="text-sm text-red-600">請先安装 MetaMask 擴充</p>
                }
              </div>
            </AccordionDetails>
          </Accordion>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialogCompontent