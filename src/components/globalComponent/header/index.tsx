// React
import React from "react";
// Mui
import { Avatar, Button, Tooltip } from "@mui/material";
// Function
import { onClickLoginListener } from "./function"

const Header = ({ t, dispatch, user }) => {

  return (
    <div className="flex border-b h-14 items-center justify-between w-full bg-white">
      <span className="text-black text-xl font-bold ml-4">{t("discover")}</span>
      {
        user.token === '' ?
        <Button onClick={() => onClickLoginListener(dispatch)} className="space-x-2 w-20 bg-green-900 rounded-3xl mr-4">
          <span className="text-white font-bold">{t("entries")}</span>
        </Button> 
        :
        <Tooltip title={"Token: " + user.token}>
          <Avatar className="mr-4" alt="Travis Howard" src="#" />
        </Tooltip>
      }
    </div>
  );
};

export default Header;
