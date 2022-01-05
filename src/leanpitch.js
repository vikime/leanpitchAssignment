import React from "react";
import productwhite from "./images/productwhite.jpg";
import Sidebar from "./sidebar";
import SidebarExample from "./sideview";
function Header() {
  return (
    <div>
      <img src={productwhite} alt="logoofcompany" width={60} height={60} />
      <header style={{ display: "inline" }}> Leanpitch </header>
      <Sidebar />
      <SidebarExample />
    </div>
  );
}

export default Header;
