import Link from "next/link";
import React from "react";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import NavbarIcon from "../icons/navbar";
import TwitterIcon from "../icons/twitter";

export default function Navbar() {
  return (
    <div className="sticky top-0 overflow-hidden">
      <nav className="flex justify-between bg-primary text-white w-screen ">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center  ">
          <div className="hidden xl:flex items-center space-x-5 fixed">
            <Link className="hover:text-gray-200" href="#">
              <FacebookIcon color="#ffffff" width="45px" height="45px" />
            </Link>
            <Link className="flex items-center hover:text-gray-200" href="#">
              <InstagramIcon color="#ffffff" width="45px" height="45px" />
            </Link>

            <Link className="flex items-center hover:text-gray-200" href="#">
              <TwitterIcon color="#ffffff" width="45px" height="45px" />
            </Link>
          </div>

          <div className="grid flex-row justify-items-center mx-auto gap-2 font-semibold space-x-12 max-w-prose">
            <div className="">
              <Link className="hover:text-gray-200 text-3xl" href="/">
                The library reviews
              </Link>
            </div>

            <ul
              className="hidden md:flex font-semibold gap-8 flex-row mr-0 text-xl"
              style={{ margin: "0px" }}
            >
              <li>
                <Link className="hover:text-gray-200" href="/books">
                  Books
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200" href="#">
                  Perfil
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link
          className="navbar-burger self-center mr-12 xl:hidden border-white border-[1px] rounded-lg p-1"
          href="#"
        >
          <NavbarIcon />
        </Link>
      </nav>
    </div>
  );
}
