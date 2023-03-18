import React from "react";

import wretch from "wretch";
import { book } from "@/models";

import Link from "next/link";

function fetching(id: string) {
  return wretch("http://127.0.0.1:8080/crud/book/" + id, {
    mode: "cors",
  })
    .resolve((res) => res.json<book>())
    .get();
}

export default async function Books({ params }: { params: any }) {
  const CDN = "http://localhost:8080/images/books/";

  const id = params.id;

  const data = await fetching(id);

  return (
    <div>
      <div>
        <img
          width={"80"}
          height={"80"}
          src={CDN + data?.image}
          alt={data?.title}
        />
        <div>{data?.resume}</div>

        <h3> {data?.title}</h3>
        {data?.categories?.map((datum) => (
          <>{datum.name}, </>
        ))}
        {data?.authors?.map((datum) => (
          <>{datum.name}, </>
        ))}

        {data.reviews?.map((datum) => (
          <div key={datum.id}>
            {datum.user.name}
            {datum.comment}
          </div>
        ))}
      </div>
    </div>
  );
}
