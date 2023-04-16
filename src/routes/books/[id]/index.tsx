import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { author, book, category, review } from "~/models";

function fetching(id: string) {
  return fetch("http://127.0.0.1:8080/crud/book/" + id, {
    mode: "cors",
  }).then((res) => {
    return res.json();
  });
}

function fetchingReviews(id: string) {
  if (!id) {
    return [];
  }
  return fetch("http://127.0.0.1:8080/crud/review/book/" + id, {
    mode: "cors",
  }).then((res) => {
    return res.json();
  });
}

export default component$(() => {
  
  const CDN = "http://localhost:8080/images/books/";

  const photo = "http://localhost:8080/images/photos/";

  const loc = useLocation();

  const id = loc.params.id;

  const book = useResource$<book>(async () => await fetching(id));
  const reviews = useResource$<review[]>(async () => await fetchingReviews(id));

  return (
    <div class="py-8 px-4">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <Resource
          value={book}
          onPending={() => <div>Loading...</div>}
          onRejected={(e) => {
            console.log("error", e);
            return <div>Error</div>;
          }}
          onResolved={(book: book) => (
            <>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
                <img
                  class="rounded-lg w-full h-full object-cover object-center lg:w-auto lg:h-auto"
                  src={CDN + book?.image}
                  alt={book?.title}
                />
                <div class="space-y-4">
                  <div class="space-y-2">
                    <h3 class="text-3xl font-bold">{book?.title}</h3>
                    <div class="text-sm font-medium text-gray-600">
                      {book?.categories?.map((datum: category) => (
                        <span key={datum.id} class="mr-2">
                          {datum.name}
                        </span>
                      ))}
                    </div>
                    <div class="text-sm font-medium text-gray-600">
                      {book?.authors?.map((datum: author) => (
                        <span key={datum.id} class="mr-2">
                          {datum.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div class="text-sm text-gray-600">{book?.resume}</div>
                </div>
              </div>
            </>
          )}
        />
      </div>
      <div>
        <Resource
          value={reviews}
          onPending={() => <div>Loading...</div>}
          onRejected={(e) => {
            console.log("error", e);
            return <div>Error</div>;
          }}
          onResolved={(reviews: review[]) => (
            <div class="">
              {Array.isArray(reviews) &&
                reviews?.map((datum: review) => (
                  <div
                    key={datum.id}
                    class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-6 p-4"
                  >
                    <div class="flex items-center space-x-2">
                      <img
                        class="w-10 h-10 rounded-full object-cover"
                        src={photo + datum.user.photo}
                        alt={datum.user.name}
                      />
                      <div>
                        <div class="font-medium">{datum.user.name}</div>
                        <div class="text-sm text-gray-600">{datum.comment}</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        />
      </div>
    </div>
  );
});
