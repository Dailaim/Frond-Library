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
    <div>
      {data?.map((book) => (
        <div key={book?.id}>
          <Link href={"./books/" + book?.id}>
            <img
              width={"80"}
              height={"80"}
              src={CDN + book.image}
              alt={book.title}
            />
            <h3> {book?.title}</h3>
            {book?.categories?.map((datum) => (
              <>{datum.name}, </>
            ))}
            {book?.authors?.map((datum) => (
              <>{datum.name}, </>
            ))}
            
          </Link>
        </div>
      ))}
    </div>
  );
}
