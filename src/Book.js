/*
title str 
  subtitle str 
  authors list 
  publisher str 
  publishedDate str 
  description str 
  industryIdentifiers list 
  readingModes dict 
      text str 
      image str 
  pageCount int 
  printType str 
  categories list 
  averageRating int 
  ratingsCount int 
  maturityRating str 
  allowAnonLogging str 
  contentVersion str 
  panelizationSummary dict 
      containsEpubBubbles str 
      containsImageBubbles str 
  imageLinks dict 
      smallThumbnail str 
      thumbnail str 
  language str 
  previewLink str 
  infoLink str 
  canonicalVolumeLink str 
  id str 
  shelf str 
*/
const Shelveoptions = [
    {
      label: "None",
      value: "None",
    },
    {
      label: "Read",
      value: "Read",
    },
    {
      label: "CurrentlyReading",
      value: "CurrentlyReading",
    },
    {
      label: "WantToRead",
      value: "WantToRead",
    },
  ];

const Book = ({book ,MoveToShelve}) => {
    
return(
    <li Key={book.title}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
              'url("'+book.imageLinks.thumbnail+'")'
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={book.shelve} onSelect={MoveToShelve}>
               <option  value="none" disabled>
                                       Move to...
                                     </option>
               {Shelveoptions.map(shelve =>{
                 return (<option  value={shelve.value}>{shelve.label}</option>)}
                   )}
            </select>
          </div>
        </div>
        <div className="book-title">{book["title"]}</div>
        <div className="book-authors">{book.authors.map(author => {
            return( {author}+ ",")
        })
        } </div>
      </div>
    </li>)
    }
export default Book;