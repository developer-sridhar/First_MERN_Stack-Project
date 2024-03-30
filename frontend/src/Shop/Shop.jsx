import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { MdOutlineFavorite } from 'react-icons/md';
import Favorite from '../components/Favorite' // Import the Favorite component

const Shop = ({ addToFavorites }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/all-books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
        setCategories([...new Set(data.map((book) => book.category))]);
      });
  }, []);

  const handleCategoryChange = (category) => {
    const updatedCategories = [...selectedCategories];
    if (updatedCategories.includes(category)) {
      // Category already selected, remove it
      const index = updatedCategories.indexOf(category);
      updatedCategories.splice(index, 1);
    } else {
      // Category not selected, add it
      updatedCategories.push(category);
    }
    setSelectedCategories(updatedCategories);
    filterBooks(updatedCategories, searchTerm);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    filterBooks(selectedCategories, value);
  };

  const filterBooks = (selectedCategories, searchTerm) => {
    let filtered = books.filter((book) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(book.category);
      const searchMatch =
        searchTerm === '' ||
        book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.authorName.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
    setFilteredBooks(filtered);
  };

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>ALL BOOKS STORE</h2>
      {/* Rest of the code remains the same */}
      {/* Home Books Cards */}
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Card key={book._id}>
              <div className='relative'>
                <Link to={`/book/${book._id}`}>
                  <img src={book.imageUrl} alt='' className='text-gray-500 text-sm' />
                </Link>
                <div
                  className='absolute top-3 right-3 bg-blue-600 p-2 rounded'
                  onClick={() => addToFavorites(book)} // Call the addToFavorites function when clicked
                >
                  <MdOutlineFavorite className='w-4 h-4 text-white hover:text-red-600' />
                </div>
                <div className='absolute top-12 right-3 bg-blue-600 hover:bg-green-500 p-2 rounded'>
                  <FaCartShopping className='w-4 h-4 text-white' />
                </div>
              </div>
              <div className='text-gray-700'>
                <div className='text-base'>
                  <h3>{book.bookTitle}</h3>
                  <p className='text-sm'>{book.authorName}</p>
                </div>
                <div>
                  <p>₹{book.bookPrice}</p>
                </div>
              </div>
              <button className='bg-violet-700 font-semibold text-white py-2 rounded'>Buy Now</button>
            </Card>
          ))
        ) : (
          <p className='text-xl text-center flex-col'>Search Result Not Found! Please Search Other Books.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
