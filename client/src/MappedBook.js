import React, { useState } from "react";
import BookModal from "./BookModal";

function MappedBook({ selectedBook, selectedBooks, setSelectedBooks }) {
  console.log(`selectedBook: ${JSON.stringify(selectedBook)}`);

  const [bookModal, setBookModal] = useState(false);

  return (
    <div className="row">
      <div className="row_posters">
        <img
          onClick={() => {
            setBookModal(true);
          }}
          className="row_posterLarge"
          src={selectedBook.book?.image}
        />
        <div className="mapped-bttn"></div>
      </div>
      {bookModal && (
        <BookModal
          closeModal={setBookModal}
          selectedBook={selectedBook}
          selectedBooks={selectedBooks}
          setSelectedBooks={setSelectedBooks}
        />
      )}
    </div>
  );
}
export default MappedBook;
