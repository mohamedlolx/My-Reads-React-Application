import React from "react";

const Book = ({ book, changeBookShelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        {book.imageLinks ? (
          <div
            className="book-cover"
            style={{
              width: 140,
              height: 210,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          ></div>
        ) : (
          <div
            className="book-cover"
            style={{
              width: 140,
              height: 210,
              backgroundImage: `url(" ")`,
            }}
          ></div>
        )}
        <div className="book-shelf-changer">
          <select
            defaultValue={book.shelf ? book.shelf : "none"}
            onChange={(e) => changeBookShelf(book, e.target.value)}
          >
            {/* <option value="none" disabled>
              Move to...
            </option> */}
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
