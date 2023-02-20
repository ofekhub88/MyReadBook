
import { useState , useEffect } from "react"
import { Link} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import BookDetails from "./BookDetails";
const SearchBook = ({books, MoveToShelve}) => {

    const [showDetails, setShowDetails] = useState({"title": "None"}); 
    const [query,setQuery ] = useState("");
    const [searchResults,setSearchResults] = useState([]);
    const [errorResults,setErrorResults] = useState("")
    const UpdateQuery = (query => {
      setQuery(query.trim());
      } );

    useEffect(() => {
        const getBooks =()  => {
           if (query === "") {
            setSearchResults([])
          } else {
               BooksAPI.search((query)).then(res => {
                if (res.error) {
                  setErrorResults("No Results found !" )
                  setSearchResults([])
                } else {
                setSearchResults(res);
                setErrorResults("")
                }
             })};
            };
      getBooks();
    }, [query]);
      
    const hanldeDetailClick = (eventAction,title,bookDetails) => {
      if (eventAction === "show") {
         setShowDetails({"title": title ,"details": bookDetails})
      } else {
        setShowDetails({"title": "None"} )
      }
    };

     return (
        <div>
          <div className="search-books">
          <div className="search-books-bar">
             <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(event) => UpdateQuery(event.target.value)}
              />
          </div>
          <Link to="/" className="close-search">
           Close 
          </Link>
          </div>
          
          <div className="search-books-results">
             { errorResults.length === 0 ? (
             <ol className="books-grid">
              {searchResults.map((book) => {
                return(<Book key={book.id}
                  hanldeDetailClick = {hanldeDetailClick} 
                  book = {book}
                  books = {books}
                  MoveToShelve = {MoveToShelve} />)
              })
              }
             </ol>) : (<h2 className="h-text-color" > {errorResults} </h2>)
                    }
             </div>
             {showDetails.title !== "None" ? 
      (<BookDetails  BookDetails={showDetails} hanldeDetailClick={hanldeDetailClick} />) 
       :
        ("")}
        </div>
   </div>
    )
}

export default SearchBook ;
/*
return(<Book 
                        book = {book}
                        MoveToShelve = {MoveToShelve} />)
*/