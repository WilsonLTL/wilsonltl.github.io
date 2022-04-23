// React
import React from "react";
// // Compontent
import { LoginDialog }from "../dialog"
import SnackBar from "../snackBar"

const Layout = ({children}) => {

  return (
    <div className="h-screen">
      <LoginDialog />
      <SnackBar />
      <div className="">
        {children}
      </div>
    </div>
  );
}

export default Layout;
