import React, { useEffect, useState } from "react";
import Booklist from "./Booklist";
import SelectedBooks from "./SelectedBooks";
import NavBar from "./Navbar";

function Books({ books, currentUser }) {
  // selectedBooks holds the booklists objects
  const [selectedBooks, setSelectedBooks] = useState([]);

  useEffect(() => {
    fetch(`/booklists?user_id=${currentUser.id}`)
      .then((res) => res.json())
      .then((data) => setSelectedBooks(data));
  }, []);

  const onNewWatchList = (newBookList) => {
    setSelectedBooks([...selectedBooks, newBookList]);
  };

  let mappedbooks = books.map((book) => {
    return (
      <Booklist
        currentUser={currentUser}
        key={book.id}
        books={book}
        onNewWatchList={onNewWatchList}
      />
    );
  });

  return (
    <div>
      <NavBar />
      <div className="flex-container">
        <div className="flex-child magenta">{mappedbooks}</div>
        <div className="flex-child green">
          <h2 className="school-interest">Personal Booklist</h2>
          <SelectedBooks
            selectedBooks={selectedBooks}
            setSelectedBooks={setSelectedBooks}
          />
        </div>
      </div>
    </div>
  );
}

export default Books;
