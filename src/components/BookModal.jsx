function BookModal({ book, close }) {
    console.log(book.coverIMG)
    return (
      <div className="modal-overlay" onClick={close}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <h2 className="book-details">{book.title}</h2>
          <img src={book.coverIMG} className="book-cover" />
          <p className="book-details"><strong>Author:</strong> {book.author}</p>
          <p className="book-details"><strong>Status:</strong> {book.status}</p>
          <p className="book-details"><strong>Repo Folder:</strong> {book.repoFolder}</p>
          
          <button className="details-button" onClick={close}>Close</button>
        </div>
      </div>
    );
  }
  export default BookModal;