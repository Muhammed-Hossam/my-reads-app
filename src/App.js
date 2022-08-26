import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import MainPage from "./views/MainPage";
import SearchPage from "./views/SearchPage";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  const [isSearchValueMatch, setIsSearchValueMatch] = useState(false)


  const getAllBooks = async () => {
    await BooksAPI.getAll().then((data) => setAllBooks(data));
  };

  const handleSearchInput = (value) => {  
    setSearchInputValue(value);
    console.log("Value => ", value);
  };

  const handleSearchBooks = async (query) => {
    await BooksAPI.search(query).then((data) => {
      if (data && !data.error) {
        setSearchBooks(data);
        setIsSearchValueMatch(true);
      }else {
        setSearchBooks('no books');
        setIsSearchValueMatch(false);
      }

    })
  };

  useEffect(() => {
    getAllBooks();
    if (searchInputValue) {
      handleSearchBooks(searchInputValue);
    }

    if (searchInputValue === '') {
      setSearchBooks([]);
    }

    if (isSearchValueMatch === false) {
      setSearchBooks('no books')
    }

    if (searchInputValue === '') {
      setIsSearchValueMatch(false);
    }

    console.log(searchInputValue);
  }, [searchInputValue, isSearchValueMatch]);

  const updateBookShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await getAllBooks();
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage allBooks={allBooks} update={updateBookShelf} />}
          />
          <Route
            path="/search"
            element={
              <SearchPage
                handleSearchInput={handleSearchInput}
                searchValue={searchInputValue}
                books={searchBooks}
                update={updateBookShelf}
                searchMatch={isSearchValueMatch}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
