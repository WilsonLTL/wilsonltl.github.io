// React
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Layout({ children, ...props }: Props) {
  return (
    <div className="w-screen h-screen">
      <div className="">{children}</div>
    </div>
  );
}

export default Layout;
