import React from "react";
import MappedSelected from "./MappedSelected";

function SelectedBooks({ currentUser, selectedBooks, setSelectedBooks }) {
  return (
    <div>
      <MappedSelected
        selectedBooks={selectedBooks}
        setSelectedBooks={setSelectedBooks}
      />
    </div>
  );
}

export default SelectedBooks;
