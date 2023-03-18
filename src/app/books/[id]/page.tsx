import React from "react";

import wretch from "wretch";
import { book, review } from "@/models";

import Link from "next/link";

function fetching(id: string) {
  return wretch("http://127.0.0.1:8080/crud/book/" + id, {
    mode: "cors",
  })
    .resolve((res) => res.json<book>())
    .get();
}

function fetchingReviews(id: number) {
  return wretch("http://127.0.0.1:8080/crud/review/book/" + id, {
    mode: "cors",
  })
    .resolve((res) => res.json<review[]>())
    .post({});
}


export default async function Books({ params }: { params: any }) {
  const CDN = "http://localhost:8080/images/books/";

  const id = params.id;

  const data = await fetching(id);

  const reviews = await fetchingReviews(data.id)

  console.log(reviews)


  

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
          <img
            className="rounded-lg w-full h-full object-cover object-center lg:w-auto lg:h-auto"
            src={CDN + data?.image}
            alt={data?.title}
          />
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">{data?.title}</h3>
              <div className="text-sm font-medium text-gray-600">
                {data?.categories?.map((datum) => (
                  <span key={datum.id} className="mr-2">
                    {datum.name}
                  </span>
                ))}
              </div>
              <div className="text-sm font-medium text-gray-600">
                {data?.authors?.map((datum) => (
                  <span key={datum.id} className="mr-2">
                    {datum.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-600">{data?.resume}</div>
            <div>
              {reviews?.map((datum) => (
                <div key={datum.id} className="mb-4">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={datum.user.photo}
                      alt={datum.user.name}
                    />
                    <div>
                      <div className="font-medium">{datum.user.name}</div>
                      <div className="text-sm text-gray-600">
                        {datum.comment}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
