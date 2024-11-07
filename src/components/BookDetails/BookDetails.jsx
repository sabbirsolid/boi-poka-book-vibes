import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToStoredList } from "../../assets/utilities/addToLocal";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const selectedBook = data.find((book) => book.bookId === id);
  const { bookName, image } = selectedBook;

  const handleMarkAsRead = (id) => {
    console.log('mark as read clicked');
    addToStoredList(id);
  }

  return (
    <div> 
      <h1> Book details: {bookId}</h1>
      <img className="h-2/4" src={image} alt={bookName} />
      <div className="flex gap-5 my-5">
        <br />
        <button onClick={() => handleMarkAsRead(bookId)} className="btn">Read</button>
        <button className="btn">WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
