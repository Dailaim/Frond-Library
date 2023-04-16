import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import NewReviews from "./home/newReviews";
import Review from "./home/review";
import Presentation from "./home/presentacion";

export default component$(() => {
  return (
    <>
      <main>
        <Presentation />
        <Review />
        <NewReviews />
        <div class="bg-gray-100">
          <div
            class="container mx-auto flex justify-center py-8
        "
          >
            <center class="grid gap-4 max-w-5xl justify-center">
              <div class="text-3xl">About</div>
              <div>
                The Library Reviews es una comunidad literaria dedicada a
                explorar el mundo de la literatura y compartir nuestras
                experiencias de lectura con otros amantes de los libros. Nos
                apasiona leer y estamos comprometidos en ofrecer reseñas
                literarias de calidad y de manera honesta. Nos esforzamos por
                proporcionar información útil sobre los libros que recomendamos
                para ayudar a nuestros seguidores a encontrar la próxima gran
                aventura literaria.
              </div>
              <div>
                {" "}
                En The Library Reviews, estamos dedicados a proporcionar un
                espacio acogedor y seguro para que los amantes de los libros se
                conecten y compartan su amor por la literatura. Nos
                enorgullecemos de nuestra comunidad de lectores apasionados y
                nos esforzamos por fomentar discusiones respetuosas y
                significativas sobre los libros que amamos. Si eres un amante de
                la literatura, esperamos que te unas a nosotros en nuestra
                misión de explorar el mundo de los libros y descubrir las
                mejores historias que el mundo literario tiene para ofrecer.
              </div>
            </center>
          </div>
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "The library reviews",
  meta: [
    {
      name: "The library reviews",
      content: "La guía perfecta para encontrar tu próxima lectura",
    },
  ],
};
