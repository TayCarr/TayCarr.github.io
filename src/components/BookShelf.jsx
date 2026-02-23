import { books } from "../data/booksData";
import Book from "./BookType";

import bookcaseIMG from '../assets/projects/books/bookshelf.jpg'

function Bookshelf() {
    
  return (
    <div className="bookshelf">
        <img className='case' src={bookcaseIMG} alt = "bookcase"></img>
        <div className="books-layer">
        {books.map(book => (
        <Book key={book.id} book={book} />
        ))}
        </div>
      
    </div>
  );
}

export default Bookshelf;