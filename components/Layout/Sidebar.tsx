import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-grayfc">
      <Link href={"/"}>Home</Link>
      <br />
      <Link href={"/login"}>Login</Link>
      <br />
      <Link href={"/products"}>Products</Link>
      <br />
      <Link href={"/products/add"}>Add Product</Link>
    </div>
  );
};

export default Sidebar;
