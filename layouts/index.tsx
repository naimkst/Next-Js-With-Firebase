import Link from "next/link";
import React, { Children } from "react";
import { app } from "../firebseconfig";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <>
        <Link href={"/register"}>Register</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/"}>Home</Link>
        {children}
      </>
    </div>
  );
};
