import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  // Delete Books
const handleDelete = (id) => {
  // Show confirmation dialog
  const confirmDelete = window.confirm("Are you sure you want to delete this book?");
  if (!confirmDelete) {
    return; // If user cancels, exit the function
  }

  fetch(`http://localhost:5000/book/${id}`, {
    method: "DELETE",
  })
    .then(res => res.json())
    .then(data => {
      alert("Book is Deleted Successfully!");
      // Ensure data is an array before setting it as allBooks
      if (Array.isArray(data)) {
        setAllBooks(data);
      } else {
        console.error("Data received after delete is not an array:", data);
        // Handle this case appropriately, e.g., show an error message
      }
    })
    .catch(error => {
      console.error("Error deleting book:", error);
      // Handle error appropriately, e.g., show an error message
    });
}



  // Filter books based on search term
  const filteredBooks = allBooks.filter(book =>
    book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='my-12 flex flex-col pt-0 mt-0'>
      <h2 className='mb-8 text-3xl font-bold text-center h-16 bg-violet-500 text-white pt-3 shadow-2xl rounded mt-5 mr-3'>Manage Your Books</h2>
      <div className='mb-3 mr-3'>
        <input
          type="text"
          placeholder="Search by book name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 placeholder-gray-400 border w-full rounded-md border-orange-500 focus:outline-none bg-blue-100 focus:ring-blue-500"
        />
      </div>

      {/* Table for Book Data */}
      <Table className='lg:w-[1180px] mt-5 mr-3'>
        <Table.Head className='text-violet-500  text-md'>
          <Table.HeadCell className='bg-orange-500 text-teal-50'>No</Table.HeadCell>
          <Table.HeadCell className='bg-orange-500 text-teal-50'>Book Name</Table.HeadCell>
          <Table.HeadCell className='bg-orange-500 text-teal-50'>Author Name</Table.HeadCell>
          <Table.HeadCell className='bg-orange-500 text-teal-50'>Category</Table.HeadCell>
          <Table.HeadCell className='bg-orange-500 text-teal-50'>Prices</Table.HeadCell>
          <Table.HeadCell className='bg-orange-500 text-teal-50'>
            <span className='text-center'>ACTION</span>
          </Table.HeadCell>
        </Table.Head>
        {
          filteredBooks.map((book, index) => (
            <Table.Body className="divide-y text-black " key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-300 hover:text-blue-500 ">
                <Table.Cell className="whitespace-nowrap font-medium  dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium  dark:text-white">
                  {book.bookTitle}
                </Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>₹ {book.bookPrice}</Table.Cell>
                <Table.Cell>
                  <Link
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                    to={`/admin/dashboard/edit-books/${book._id}`}
                  >
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-500'>Delete</button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))
        }
      </Table>
    </div>
  )
}

export default ManageBooks;
