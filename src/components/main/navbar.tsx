import { component$ } from "@builder.io/qwik";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import NavbarIcon from "../icons/navbar";
import TwitterIcon from "../icons/twitter";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="sticky top-0 overflow-hidden">
      <nav class="flex justify-between bg-primary text-white w-screen ">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center  ">
          <div class="hidden xl:flex items-center space-x-5 fixed">
            <Link class="hover:text-gray-200" href="#" title="Facebook">
              <FacebookIcon color="#ffffff" width="45px" height="45px" />
            </Link>
            <Link
              class="flex items-center hover:text-gray-200"
              href="#"
              title="Instagram"
            >
              <InstagramIcon color="#ffffff" width="45px" height="45px" />
            </Link>

            <Link
              class="flex items-center hover:text-gray-200"
              href="#"
              title="Twitter"
            >
              <TwitterIcon color="#ffffff" width="45px" height="45px" />
            </Link>
          </div>

          <div class="grid flex-row justify-items-center mx-auto gap-2 font-semibold space-x-12 max-w-prose">
            <div class="">
              <Link class="hover:text-gray-200 text-3xl" href="/">
                The library reviews
              </Link>
            </div>

            <ul
              class="hidden md:flex font-semibold gap-8 flex-row mr-0 text-xl"
              style={{ margin: "0px" }}
            >
              <li>
                <Link class="hover:text-gray-200" href="/books">
                  Books
                </Link>
              </li>
              <li>
                <Link class="hover:text-gray-200" href="#">
                  Perfil
                </Link>
              </li>
              <li>
                <Link class="hover:text-gray-200" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link
          title="Menu"
          class="navbar-burger self-center mr-12 xl:hidden border-white border-[1px] rounded-lg p-1"
          href="#"
        >
          <NavbarIcon />
        </Link>
      </nav>
    </div>
  );
});
