import { useState, useEffect } from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header";
import Shelfs from "./components/shelfs";
import Book from "./components/book";

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [gatheringOfTotalBooks, setGatheringOfTotalBooks] = useState(new Map());
  console.log(books);

  useEffect(() => {
    BooksAPI.getAll().then((x) => {
      setBooks(x);
      setGatheringOfTotalBooks(createMapOfBooks(x));
    });
  }, []);

  useEffect(() => {
    let inUse = true;
    if (searchQuery) {
      BooksAPI.search(searchQuery).then((d) => {
        if (d.error) {
          setSearchBooks([]);
        } else {
          if (inUse) {
            setSearchBooks(d);
          }
        }
      });
    }
    return () => {
      inUse = false;
      setSearchBooks([]);
    };
  }, [searchQuery]);

  useEffect(() => {
    const TogetherBooks = searchBooks.map((book) => {
      if (gatheringOfTotalBooks.has(book.id)) {
        return gatheringOfTotalBooks.get(book.id);
      } else {
        return book;
      }
    });
    setTotalBooks(TogetherBooks);
  }, [gatheringOfTotalBooks, searchBooks]);

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };

  const updateBookShelf = (book, whatShelf) => {
    const updateBook = books.map((b) => {
      if (b.id === book.id) {
        book.shelf = whatShelf;
        return book;
      }
      return b;
    });
    if (!gatheringOfTotalBooks.has(book.id)) {
      book.shelf = whatShelf;
      updateBook.push(book);
    }

    setBooks(updateBook);
    BooksAPI.update(book, whatShelf);
  };

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/search"
            element={
              <div className="search-books">
                <div className="search-books-bar">
                  <Link to="/">
                    <button className="close-search">Close</button>
                  </Link>
                  <div className="search-books-input-wrapper">
                    <input
                      type="text"
                      placeholder="Search by title, author, or ISBN"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                    {totalBooks.map((b) => (
                      <li key={b.id}>
                        <Book book={b} changeBookShelf={updateBookShelf} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            }
          ></Route>
          <Route
            path="/"
            element={
              <div className="list-books">
                <Header />
                <div className="list-books-content">
                  <Shelfs books={books} updateBookShelf={updateBookShelf} />
                </div>
                <div className="open-search">
                  <Link to="/search">
                    <button>Add a book</button>
                  </Link>
                </div>
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
