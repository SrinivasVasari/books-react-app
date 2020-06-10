import React from "react";

const BookDetails = ({ book, clickFn }) => {
  if (book) {
    const { bookName, bookAuthor, bookDesc } = book && book.books;
    return (
      <>
        <div className="details">
          <span>Title:</span> <span>{bookName}</span>
        </div>
        <div id="close" className="details-btn" onClick={clickFn}>
          <span className="content">Close</span>
          <i className="material-icons">reply</i>
        </div>
        <div className="details">
          <span>Author:</span>
          <span>{bookAuthor}</span>
        </div>
        <div className="details">
          <span>Description:</span>
          <span
            className="container-fluid"
            dangerouslySetInnerHTML={{ __html: bookDesc }}
          />
        </div>
        <div id="close" className="close-btn waves-effect waves-light btn-small" onClick={clickFn}>
          <span className="content">Close</span>
        </div>
      </>
    );
  } else {
    return (
      <div className="front-no-data">
        <div className="details">
          <span>Title:</span>{" "}
          <span>The Lord of the Rings: The Fellowship of the Ring</span>
        </div>
        <div className="details">
          <span>Author:</span>
          <span>J. R. R. Tolkien</span>
        </div>
        <div className="details">
          <span>Description:</span>
          <span>
            Description:All three parts of the epic masterpiece The Lord of the
            Rings – The Fellowship of the Ring, The Two Towers & The Return of
            the King. Sauron, the Dark Lord, has gathered to him all the Rings
            of Power – the means by which he intends to rule Middle-earth.
          </span>
        </div>
      </div>
    );
  }
};

export default BookDetails;
