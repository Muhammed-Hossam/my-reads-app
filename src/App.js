import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import MainPage from "./views/MainPage";
import SearchPage from "./views/SearchPage";


function App() {

  const [allBooks, setAllBooks] = useState([]);

  const getAllBooks = async () => {
    await BooksAPI.getAll().then(data => setAllBooks(data));
  }

  useEffect(() => {
    getAllBooks();
  }, [])
  

  const updateBookShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await getAllBooks();
  }


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage allBooks={allBooks} update={updateBookShelf} />} />
          <Route path="/search" element={<SearchPage />}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
