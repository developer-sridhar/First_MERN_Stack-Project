import React, { useEffect, useState } from 'react';
import BooksImg from "../assets/totalbooks.png"; // Import the image directly

const Dashboard = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => {
        setAllBooks(data);
        setTotalBooks(data.length); // Update totalBooks count
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < totalBooks) {
        setCount(prevCount => prevCount + 1);
      }
    }, 75);

    return () => clearInterval(timer);
  }, [count, totalBooks]);

  return (
    <div className='w-full mr-3'>
      <h1 className='p-5 mb-8 text-3xl font-bold text-center h-16 bg-violet-500 text-white pt-3 shadow-2xl rounded mt-8'>Admin Dashboard</h1>
      
      <div className='bg-gray-200 mt-5 flex space-between'>
        <div className='bg-gray-300 w-52 mr-10'>
          <p className='font-bold text-white text-xl text-center p-3 shadow-xl bg-orange-500 rounded-xl'>Total Books</p>
          <img src={BooksImg} alt="" className='p-5 mt-3'/>
          <p className='bg-violet-500 p-3 font-bold text-2xl text-center text-white shadow-xl transition-all duration-500'>{count}</p>
        </div>
        <div className='bg-gray-300 w-52 mr-10'>
          <p className='font-bold text-white text-xl text-center p-3 shadow-xl bg-orange-500 rounded-xl'>Total Books</p>
          <img src={BooksImg} alt="" className='p-5 mt-3'/>
          <p className='bg-violet-500 p-3 font-bold text-2xl text-center text-white shadow-xl transition-all duration-500'> {count}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
