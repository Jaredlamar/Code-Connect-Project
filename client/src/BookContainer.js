import React, { useState, useEffect } from "react";
import Books from "./Books";

function BookContainer({ currentUser }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="main">
      <Books books={books} currentUser={currentUser} />
    </div>
  );
}

export default BookContainer;
