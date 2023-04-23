import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
type LayoutMainProps = {
  children: ReactNode;
};

export default function LayoutMain({ children }: LayoutMainProps) {
  return (
    <>
      <Header></Header>
      <div className="grid min-h-screen grid-cols-[250px_minmax(0,1fr)]">
        <Sidebar></Sidebar>
        <div>{children}</div>
      </div>
    </>
  );
}
