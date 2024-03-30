import React from 'react';

const Favorite = ({ favorites, addToFavorites }) => {
  return (
    <div className='my-24'>
      <h2>Favorite Books</h2>
      {favorites && favorites.map((book) => (
        <div key={book._id}>
          <p>{book.bookTitle}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default Favorite;
