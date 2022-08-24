import { Link } from 'react-router-dom'
// import { useEffect } from 'react';
import BookShelf from '../components/BookShelf';


const MainPage = ({allBooks, update}) => {

  console.log(allBooks);


  const curShelfBooks = allBooks.filter(book => book.shelf === 'currentlyReading');
  const wantShelfBooks = allBooks.filter(book => book.shelf === 'wantToRead');
  const readShelfBooks = allBooks.filter(book => book.shelf === 'read');

  console.log('current',curShelfBooks);
  console.log('wantToRead', wantShelfBooks);
  console.log('read', readShelfBooks);



  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf category="Currently Reading" shelfBooks={curShelfBooks} update={update} />
        <BookShelf category="Want To Read" shelfBooks={wantShelfBooks} update={update} />
        <BookShelf category="Read" shelfBooks={readShelfBooks} update={update} />
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>

  )
}

export default MainPage;

