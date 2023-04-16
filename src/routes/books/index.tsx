import { component$, useResource$, Resource } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import type { author, book, category } from "~/models";
3;

function fetching() {
  // converter wretch to fetch
  return fetch(`http://127.0.0.1:8080/crud/book`, {
    mode: "cors",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export default component$(() => {
  const CDN = "http://localhost:8080/images/books/";

  const books = useResource$<book[]>(async () => {
    return await fetching();
  });

  return (
    <div class="container mx-auto py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-2 md:mx-0">
        <Resource
          value={books}
          onPending={() => <>loading...</>}
          onRejected={(e) => {
            console.log("error", e);
            return <>error</>;
          }}
          onResolved={(books: book[]) => (
            <>
              {books?.map((book: book) => (
                <Link
                  key={book?.id}
                  href={"/books/" + book?.id}
                  class="flex flex-col items-center bg-white shadow-md hover:shadow-lg rounded-lg p-4 transition duration-300 ease-in-out"
                >
                  <img
                    class="w-40 h-40 object-cover object-center mb-4"
                    src={CDN + book.image}
                    alt={book.title}
                  />
                  <div class="text-center">
                    <h3 class="text-gray-900 font-medium text-md mb-2">
                      {book?.title}
                    </h3>
                    <p class="text-gray-400 text-sm">
                      {book?.categories?.map((datum: category) => (
                        <span key={datum.id}>{datum.name}, </span>
                      ))}
                    </p>
                    <p class="text-gray-400 text-sm">
                      {book?.authors?.map((datum: author) => (
                        <span key={datum.id}>{datum.name}, </span>
                      ))}
                    </p>
                  </div>
                </Link>
              ))}
            </>
          )}
        />
      </div>
    </div>
  );
});
