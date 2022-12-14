import classes from './BookItem.module.css';


const BookItem = ({ book, update }) => {
  let bookImage = null;
  bookImage =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : null;

  const bookTitle = book.title;
  const bookAuthors =
    book.authors && book.authors.length > 1
      ? book.authors.join(" - ")
      : book.authors;


  const updateShelf = (event) => {
    update(book, event.target.value);
    console.log("value => ", event.target.value);
  };

  return (
    <li>
      <div className={classes['book']}>
        <div className={classes['book-top']}>
          <div
            className={classes['book-cover']}
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookImage})`,
            }}
          ></div>
          <div className={classes['book-shelf-changer']}>
            <select
              onChange={updateShelf}
              value={book.shelf ? book.shelf : "none"}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className={classes['book-title']}>{bookTitle}</div>
        <div className={classes['book-authors']}>{bookAuthors}</div>
      </div>
    </li>
  );
};

export default BookItem;
