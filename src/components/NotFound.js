
const NotFound = ({searchValue, searchMatch}) => {

  return (
    <div>
      {
        searchValue !== '' && searchMatch === false ? (

          <h1 className="not-found">The book that you search about is not found!</h1>
        ) : (
          <h1 className="search-for">Search for a book...</h1>
        )

      }
    </div>
  )

}

export default NotFound;