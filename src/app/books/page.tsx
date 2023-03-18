import wretch from "wretch";
import { book } from "@/models";

import Link from "next/link";

function fetching() {
  return wretch("http://127.0.0.1:8080/crud/book", {
    mode: "cors",
  })
    .resolve((res) => res.json<book[]>())
    .get();
}

export default async function Books() {
  const CDN = "http://localhost:8080/images/books/";

  const data = await fetching();
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((book) => (
          <Link key={book?.id} href={"./books/" + book?.id} className="flex flex-col items-center bg-white shadow-md hover:shadow-lg rounded-lg p-4 transition duration-300 ease-in-out">

              <img
                className="w-40 h-40 object-cover object-center mb-4"
                src={CDN + book.image}
                alt={book.title}
              />
              <div className="text-center">
                <h3 className="text-gray-900 font-medium text-md mb-2">
                  {book?.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {book?.categories?.map((datum) => (
                    <span key={datum.id}>{datum.name}, </span>
                  ))}
                </p>
                <p className="text-gray-400 text-sm">
                  {book?.authors?.map((datum) => (
                    <span key={datum.id}>{datum.name}, </span>
                  ))}
                </p>
              </div>

          </Link>
        ))}
      </div>
    </div>
  );
}
