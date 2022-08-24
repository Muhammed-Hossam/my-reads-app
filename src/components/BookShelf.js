import BookItem from "./BookItem";

const BookShelf = ({ category, shelfBooks, update }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{category}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map(book => (
            <BookItem key={book.id} book={book} update={update} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
