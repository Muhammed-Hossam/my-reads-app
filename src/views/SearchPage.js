import { Link } from 'react-router-dom'
import BookItem from '../components/BookItem';
import LoadingSpinner from '../components/LoadingSpinner';
import classes from './SearchPage.module.css';

const SearchPage = ({handleSearchInput, searchValue, books, update, searchMatch, notFound}) => {

  console.log('books', books);
  console.log('search Value', searchValue);


  
  return (
    <div className="search-books">
    <div className={classes['search-books-bar']}>
      <Link
        className={classes['close-search']}
        to="/"
      >
        Close
      </Link>
      <div className={classes['search-books-input-wrapper']}>
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={(e) => handleSearchInput(e.target.value)}
          value={searchValue}
        />
      </div>
    </div>


      <div className={classes['search-books-results']}>


    {
      searchValue && books.length === 0 && !notFound ?

      (        
          <LoadingSpinner /> 
      )
      :
      (
        notFound && !searchMatch ?
        (
          <h1 className={classes['not-found-alert']}>The Book That You Search About Is NOT Found!</h1>
        )
        :
        (
        <ol className={classes['books-grid']}>
          {
            
              books.map((book) => <BookItem book={book} update={update} key={book.id} />)
            
          }
        </ol>
        )
      )
    }
    </div>
  </div>
  )

}


export default SearchPage;