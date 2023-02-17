
import Book from "./Book";
import { useState } from "react"
import { Link} from "react-router-dom";

const SearchBook = ({ books ,userbooks,MoveToShelve}) => {
    console.log(userbooks)
    const [query,setQuery ] = useState("");

    const updateQuery = (query) => {
        setQuery(query.trim());
      };
    
    const showingBooks =
        query === ""
          ? []
          : books.filter((book) =>
              book.title.toLowerCase().includes(query.toLowerCase())
            );
    
    
    return (
        <div>
          <div className="search-books">
          <div className="search-books-bar">
 
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
              />
              
          </div>
          <Link to="/" className="close-search">
           Close 
          </Link>
          </div>
          
          <div className="search-books-results">
    
             <ol className="books-grid">
              {showingBooks.map((book) => {
                
                const SBook = book;
                SBook["shelve"] = ( userbooks[book.title] ? userbooks[book.title] : "None" )
                return(<Book 
                        book = {SBook}  
                        MoveToShelve = {MoveToShelve} />)
              })
              }
             </ol>
             </div>
        </div>
   </div>
    )
}

export default SearchBook ;