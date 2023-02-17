import "./App.css";
import { useState , useEffect} from "react";
import BookShelves from "./BookShelves";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBook from "./SearchBook";





function App() {
  const [books, setBooks] = useState([]);
  const [userbooks,setUserbooks] = useState({"Lords of Finance}": "Read"});
  
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

const MoveToShelve=((book,moveto) => {
  const UpdateBook = {}
  UpdateBook[book] = moveto
  setUserbooks(...userbooks, UpdateBook)
})

  return (
    <div>
    <Routes>
     <Route exact path="/" 
            element={
            <BookShelves
            books={books}
            userbooks = {userbooks}
            MoveToShelves = {MoveToShelve}
             />}
     />
     <Route path="/search" 
            element={
            <SearchBook
            books={books}
            userbooks = {userbooks}
            MoveToShelves = {MoveToShelve}
             />}
     />
    </Routes>
 </div>

  );
}

export default App;
