import { Link } from 'react-router-dom'
import BookItem from '../components/BookItem';
import NotFound from '../components/NotFound';

const SearchPage = ({handleSearchInput, searchValue, books, update, searchMatch}) => {

  
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <Link
        className="close-search"
        to="/"
      >
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={(e) => handleSearchInput(e.target.value)}
          value={searchValue}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {
          searchMatch ? (
          
            books.map((book) => <BookItem book={book} update={update} key={book.id} />)

          )
          : (
          
            <NotFound searchValue={searchValue} searchMatch={searchMatch} />

          )
        }
      </ol>
    </div>
  </div>
  )

}


export default SearchPage;