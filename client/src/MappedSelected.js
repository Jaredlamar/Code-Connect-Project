import React from "react";
import MappedBook from "./MappedBook";

function MappedSelected({ selectedBooks, setSelectedBooks }) {
  let mappedSelected = selectedBooks.map((selectedBook) => {
    return (
      <MappedBook
        selectedBook={selectedBook}
        selectedBooks={selectedBooks}
        setSelectedBooks={setSelectedBooks}
      />
    );
  });

  return <div>{mappedSelected}</div>;
}

export default MappedSelected;
