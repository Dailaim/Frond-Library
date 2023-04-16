import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import {} from "@qwik-city-plan";

export default component$(() => {
  const nav = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1423592707957-3b212afa6733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI5NjF8MHwxfHNlYXJjaHwyM3x8UmVzdW1lJTIwV3JpdGluZ3xlbnwwfHx8fDE2Nzg5NjExOTg&ixlib=rb-4.0.3&q=80&w=1080")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      class=" text-white flex  items-center justify-center overflow-hidden flex-none "
    >
      <div
        class="w-full h-full "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div class=" container mx-auto grid my-14 justify-center items-center    ">
          <center class="mx-2 flex justify-center  ">
            <h1 class="text-3xl max-w-md 2xl:text-4xl  2xl:max-w-lg ">
              Explora las mejores historias con The Library Reviews: la fuente
              confiable para los amantes de los libros.
            </h1>
          </center>
          <button
            type="button"
            class=" bg-slate-50 border border-primary text-primary rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-primary focus:outline-none focus:shadow-outline"
            onClick$={() => nav("/books")}
          >
            Books
          </button>
        </div>
      </div>
    </div>
  );
});
