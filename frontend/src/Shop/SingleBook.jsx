import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const { _id, bookTitle, imageUrl, bookPrice, category, bookDescription } = useLoaderData();
    const [amount, setAmount] = useState(1);

    return (
        <div className='mt-28 md:mt-28 px-4 md:px-8 lg:px-56 justify-center flex flex-col '>
            <div className='flex flex-col lg:flex-row lg:items-start'>
                <div className='flex rounded-xl justify-center shadow-2xl shadow-orange-600'>
                    <img src={imageUrl} alt="" className='w-72 h-auto lg:h-full rounded-xl' />
                </div>
                {/* ABOUT */}
                <div className='flex flex-col lg:w-1/2 lg:ml-8 md:ml-10 mt-4 md:mt-0'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3 w-full h-10 text-center justify-center rounded-md mb-5 pt-2 bg-gradient-to-r from-orange-700 via-orange-500 to-orange-700'>
                            <h2 className='text-white font-semibold'>Book ID: </h2>
                            <h2 className='font-semibold'>{_id}</h2>
                        </div>
                        <div className='flex gap-3 font-semibold mb-6'>
                            <h2 className='text-violet-600'>Category: </h2>
                            <span>{category}</span>
                        </div>
                    </div>
                    <h5 className='font-semibold text-violet-600'>Book Title:</h5>
                    <h1 className='text-2xl font-bold mb-5'>{bookTitle}</h1>
                    <h5 className='font-semibold text-violet-600'>Book Description:</h5>
                    <p className='text-gray-700 mb-5'>{bookDescription}</p>
                    <h5 className='font-semibold text-violet-600'>Book Price:</h5>
                    <h6 className='text-2xl font-bold text-green-700'>₹ {bookPrice}</h6>
                    <div className='flex flex-row items-center gap-8 md:gap-12 mt-6 mb-10'>
                        <div className='flex flex-row items-center '>
                            <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                            <span className='py-4 px-6 rounded-lg'>{amount}</span>
                            <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                        </div>
                        <button className='bg-violet-800 text-white font-semibold py-3 px-8 md:px-16 rounded-xl h-full '>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
