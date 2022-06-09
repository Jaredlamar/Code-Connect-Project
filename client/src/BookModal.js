import React from "react";

function BookModal({
  closeModal,
  selectedBook,
  selectedBooks,
  setSelectedBooks,
}) {
  function handleBooklistDelete() {
    console.log("deleting booklist ", selectedBook.id);
    fetch(`/booklists/${selectedBook.id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedBooklists = selectedBooks.filter((booklist) => {
          if (booklist.id !== selectedBook?.id) {
            return booklist;
          }
        });

        setSelectedBooks(updatedBooklists);

        closeModal(false);
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalTitle">
          <h2 className="post-H">{selectedBook.book.title}</h2>
        </div>
        <div className="ModalBody">
          <img className="selected-image" src={selectedBook.book.image} />
          <div>
            <em className="selected">Author:  {selectedBook.book.author}</em>
          </div>
          <div>
            <em>Published Date: {selectedBook.book.published}</em>
          </div>
          <div>
            <a>
              <a href={selectedBook.book.link} target="_blank">
                Purchase Book
              </a>
            </a>
          </div>
        </div>
        <div className="modalFooter">
          <button onClick={() => closeModal(false)}>Close</button>{" "}
          <button onClick={handleBooklistDelete}>Delete Book</button>
        </div>
      </div>
    </div>
  );
}

export default BookModal;
