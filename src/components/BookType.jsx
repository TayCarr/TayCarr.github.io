import { useState } from "react";
import BookModal from "./BookModal";

function Book({ book }) {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <div
        className={`book ${book.status}`}
        onClick={() => setOpen(true)}
      >
        <div className="book-inner">
            
          <img src={book.spineIMG} className="book-spine" />
          <img src={book.coverIMG} className="book-cover" />
        </div>

        {book.status === "completed" && (
          <span className="badge">✓</span>
        )}
      </div>

      {open && <BookModal book={book} close={() => setOpen(false)} />}
    </>
  );
}

export default Book;