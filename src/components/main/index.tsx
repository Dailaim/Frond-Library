
import { Slot, component$ } from "@builder.io/qwik";
import Footer from "./footer";
import Navbar from "./navbar";

export default component$(({
  ...props
}: {
  class: string;
}) =>{
  return (
    <>
      <Navbar />
      <div class={props.class}>
        <Slot />
      </div>
      <Footer />
    </>
  );
})
