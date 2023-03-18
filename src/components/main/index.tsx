import Link from "next/link";
import React from "react";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import NavbarIcon from "../icons/navbar";
import TwitterIcon from "../icons/twitter";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Main({
  children,
  ...props
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <>
      <Navbar />
      <div className={props.className}>{children}</div>
      <Footer />
    </>
  );
}
