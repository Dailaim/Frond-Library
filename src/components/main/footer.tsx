import { component$ } from "@builder.io/qwik";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import TwitterIcon from "../icons/twitter";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="bg-secondary w-screen mx-auto ">
      <footer class="container mx-auto flex justify-between py-8 ">
        <div class="text-3xl pt-4 ml-7">The library reviews</div>

        <div class="grid grid-cols-2 gap-8">
          <div class="gap-2 grid grid-rows-3 ">
            <Link href="/">Home</Link>
            <Link href="/books">Books</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div class="grid auto-cols-max ">
            <Link class="hover:text-gray-200" href="#" title="Facebook">
              <FacebookIcon color="#000000" width="35px" height="35px" />
            </Link>
            <Link
              class="flex items-center hover:text-gray-200"
              href="#"
              title="Instagram"
            >
              <InstagramIcon color="#000000" width="35px" height="35px" />
            </Link>

            <Link
              class="flex items-center hover:text-gray-200"
              href="#"
              title="Twitter"
            >
              <TwitterIcon color="#000000" width="35px" height="35px" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
});
