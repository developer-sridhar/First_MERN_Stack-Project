import React, { useState } from 'react';
import { Textarea, Button, Label, Select, TextInput } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fantasy",
    "Computer Science",
    "English",
    "Tamil",
    "Mathematics",
    "Novel",
    "Autobiography",
    "Commerce"
  ];

  const bookLanguage = [
    "Tamil",
    "English",
    "Malayalam",
    "Telugu",
    "Gujarati",
    "Odia",
    "Marathi",
    "Hindi",
    "French",
  ];

  // BookCategories
  const [selectedBookCategories, setSelectedBookCategories] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategories(event.target.value);
  };

  // BookLanguages
  const [selectedBookLanguage, setSelectedBookLanguage] = useState(bookLanguage[0]);

  const handleChangeLanguageSelectedValue = (event) => {
    setSelectedBookLanguage(event.target.value);
  };

  // handle book Submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPrice = form.bookPrice.value;

    const bookObj = {
      bookTitle, authorName, imageUrl, category, bookDescription, bookPrice
    };

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      alert("Book Uploaded Successfully!!!");
      form.reset();
    });
  };

  return (
    <div className='px-4 w-full border-violet-500 m-10 '>
      <h2 className='mb-8 text-3xl font-bold text-center h-16 bg-violet-500 text-white pt-3 shadow-2xl rounded'>Upload New Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180] flex-col flex-wrap gap-4 ">
        {/* First Row */}
        <div className='flex gap-8'>

          {/* Book Title */}
          <div className='lg:w-1/2 '>
            <div className="mb-2 block">
              <Label
                htmlFor="bookTitle"
                value="Book Title"
              />
            </div>
            <TextInput
              id="bookTitle"
              name='bookTitle'
              type="text"
              placeholder="Book Name"
              required
            />
          </div>

          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Author Name"
              />
            </div>
            <TextInput
              id="authorName"
              name='authorName'
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>

        {/* Second Row */}
        <div className='flex gap-8'>

          {/* Book Image URL */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="imageUrl"
                value="Book Image URL"
              />
            </div>
            <TextInput
              id="imageUrl"
              name='imageUrl'
              type="text"
              placeholder="Book Image URL"
              required
            />
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="inputState"
                value="Book Category"
              />
            </div>

            <Select id='inputState' name='category' className='w-full rounded' value={selectedBookCategories} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }

            </Select>

          </div>

        </div>

        {/* Third Row Description */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookDescription"
              value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name='bookDescription'
            className='w-full '
            rows={6}
            placeholder="Write your Book Description..."
            required
          />
        </div>

        {/* Book Language */}

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="inputState"
              value="Book Language"
            />
          </div>

          <Select id='inputState' name='Language' className='w-full rounded' value={selectedBookLanguage} onChange={handleChangeLanguageSelectedValue}>
            {
              bookLanguage.map((option) => <option key={option} value={option}>{option}</option>)
            }
          </Select>
        </div>
        {/* Book Price */}
        <div>
          <div className='lg:w-1/2 '>
            <div className="mb-2 block">
              <Label
                htmlFor="bookPrice"
                value="Book Price"
              />
            </div>
            <TextInput
              id="bookPrice"
              name='bookPrice'
              type="text"
              placeholder="Enter price"
              required
            />
          </div>
        </div>

        <Button type='submit' className=' mt-5'>
          Upload Book
        </Button>

      </form>
    </div>
  )
}

export default UploadBook;
