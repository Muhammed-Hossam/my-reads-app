import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";
import classes from "./MainPage.module.css";
import LoadingSpinner from "../components/LoadingSpinner";

const MainPage = ({ allBooks, update }) => {
  const loads = allBooks.length > 0 ? true : false;
  console.log(loads);

  const curShelfBooks = allBooks.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantShelfBooks = allBooks.filter((book) => book.shelf === "wantToRead");
  const readShelfBooks = allBooks.filter((book) => book.shelf === "read");

  // console.log('current',curShelfBooks);
  // console.log('wantToRead', wantShelfBooks);
  // console.log('read', readShelfBooks);

  return (
    <div className="list-books">
      <div className={classes["list-books-title"]}>
        <h1>MyReads</h1>
      </div>

      {loads ? (
        <div className={classes["list-books-content"]}>
          <div>
            <BookShelf
              category="Currently Reading"
              shelfBooks={curShelfBooks}
              update={update}
            />
            <BookShelf
              category="Want To Read"
              shelfBooks={wantShelfBooks}
              update={update}
            />
            <BookShelf
              category="Read"
              shelfBooks={readShelfBooks}
              update={update}
            />
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}

      <div className={classes["open-search"]}>
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MainPage;
