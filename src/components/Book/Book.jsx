import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, tags, image, author, bookName, category, rating } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-slate-600 rounded-xl py-4">
          <img className="h-[166px] " src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex gap-5 max-w-lg mx-auto">
            {tags.map((tag,index) => (
              <button key={index} className="btn btn-xs font-bold bg-green-100 text-green-700">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating}{" "}
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
