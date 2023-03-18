import Link from "next/link";
import React from "react";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import TwitterIcon from "../icons/twitter";

export default function Footer() {
  return (
    <div className="bg-secondary w-screen mx-auto ">
      <footer className="container mx-auto flex justify-between py-8 ">
        <div className="text-3xl pt-4 ml-7">The library reviews</div>

        <div className="grid grid-cols-2 gap-8">
          <div className="gap-2 grid grid-rows-3 ">
            <Link href="/">Home</Link>
            <Link href="/books">Books</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className="grid auto-cols-max ">
            <Link className="hover:text-gray-200" href="#">
              <FacebookIcon color="#000000" width="35px" height="35px" />
            </Link>
            <Link className="flex items-center hover:text-gray-200" href="#">
              <InstagramIcon color="#000000" width="35px" height="35px" />
            </Link>

            <Link className="flex items-center hover:text-gray-200" href="#">
              <TwitterIcon color="#000000" width="35px" height="35px" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
