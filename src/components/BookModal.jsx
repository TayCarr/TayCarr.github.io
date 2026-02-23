function BookModal({ book, close }) {
    return (
      <div className="modal-overlay" onClick={close}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <h2>{book.title}</h2>
          {/*<img src={book.coverIMG} className="book-cover" />*/}
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Status:</strong> {book.status}</p>
          <p><strong>Repo Folder:</strong> {book.repoFolder}</p>
          
          <button onClick={close}>Close</button>
        </div>
      </div>
    );
  }
  export default BookModal;