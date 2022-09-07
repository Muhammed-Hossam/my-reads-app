import BookItem from "./BookItem";
import classes from './BookShelf.module.css';

const BookShelf = ({ category, shelfBooks, update }) => {
  return (
    <div className={classes['bookshelf']}>
      <h2 className={classes['bookshelf-title']}>{category}</h2>
      <div className={classes['bookshelf-books']}>
        <ol className={classes['books-grid']}>
          {shelfBooks.map(book => (
            <BookItem key={book.id} book={book} update={update} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
