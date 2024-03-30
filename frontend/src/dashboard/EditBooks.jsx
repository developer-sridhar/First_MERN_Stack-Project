import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Textarea, Button, Label, Select, TextInput } from 'flowbite-react';

const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle: initialBookTitle,
    authorName: initialAuthorName,
    imageUrl: initialImageUrl,
    category: initialCategory,
    bookDescription: initialBookDescription,
    bookPDFURL: initialBookPDFURL,
    language: initialLanguage,
    bookPrice: initialBookPrice
  } = useLoaderData();

  const [bookTitle, setBookTitle] = useState(initialBookTitle);
  const [authorName, setAuthorName] = useState(initialAuthorName);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [category, setCategory] = useState(initialCategory);
  const [bookDescription, setBookDescription] = useState(initialBookDescription);
  const [bookPDFURL, setBookPDFURL] = useState(initialBookPDFURL);
  const [language, setLanguage] = useState(initialLanguage);
  const [bookPrice, setBookPrice] = useState(initialBookPrice);
  const [selectedBookCategories, setSelectedBookCategories] = useState(initialCategory);
  const [selectedBookLanguage, setSelectedBookLanguage] = useState(initialLanguage);

  const bookCategories = [
    "Fantasy",
    "Computer Science",
    "English",
    "Tamil",
    "Mathematics",
    "Autobiography"
  ];

  const bookLanguage = [
    "Tamil",
    "English",
    "Malayalam",
    "Telugu",
    "Gujarati",
    "Odia",
    "Marathi",
    "Hindi"
  ];

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategories(event.target.value);
  };

  const handleChangeLanguageSelectedValue = (event) => {
    setSelectedBookLanguage(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedBook = {
      bookTitle,
      authorName,
      imageUrl,
      category: selectedBookCategories,
      bookDescription,
      bookPDFURL,
      language: selectedBookLanguage,
      bookPrice
    };

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBook)
    })
      .then(res => res.json())
      .then(data => {
        alert("Book is Updated Successfully!!!");
        // You may want to redirect or perform additional actions upon successful update
      })
      .catch(error => {
        console.error('Error updating book:', error);
        // Handle error appropriately, e.g., show error message to user
      });
  };

  return (
    <div className='px-4 w-full m-10'>
      <h2 className='mb-8 text-3xl font-bold text-center h-16 bg-violet-500 text-white pt-3 shadow-2xl rounded'>Edit The Book data</h2>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4 ">
        {/* First Row */}
        <div className='flex flex-col md:flex-row md:gap-8'>
          {/* Book Title */}
          <div className='md:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name='bookTitle'
              type="text"
              placeholder="Book Name"
              required
              value={bookTitle}
              onChange={e => setBookTitle(e.target.value)}
            />
          </div>
          {/* Author Name */}
          <div className='md:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name='authorName'
              type="text"
              placeholder="Author Name"
              required
              value={authorName}
              onChange={e => setAuthorName(e.target.value)}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className='flex flex-col md:flex-row md:gap-8'>
          {/* Book Image URL */}
          <div className='md:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput
              id="imageUrl"
              name='imageUrl'
              type="text"
              placeholder="Book Image URL"
              required
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
            />
          </div>
          {/* Category */}
          <div className='md:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id='inputState'
              name='category'
              className='w-full rounded'
              value={selectedBookCategories}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* Third Row Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name='bookDescription'
            className='w-full'
            rows={6}
            placeholder="Write your Book Description..."
            required
            value={bookDescription}
            onChange={e => setBookDescription(e.target.value)}
          />
        </div>

        {/* Book Language */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Language" />
          </div>
          <Select
            id='inputState'
            name='Language'
            className='w-full rounded'
            value={selectedBookLanguage}
            onChange={handleChangeLanguageSelectedValue}
          >
            {bookLanguage.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        </div>

        {/* Book Price */}
        <div className='md:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookPrice" value="Book Price" />
          </div>
          <TextInput

            id="bookPrice"
            name='bookPrice'
            type="text"
            placeholder="Enter Book Price"
            required
            defaultValue={bookPrice}
          />
        </div>

        <Button type='submit' className='mt-5'>
          Update Book
        </Button>

      </form>
    </div>
  )
}

export default EditBooks;
