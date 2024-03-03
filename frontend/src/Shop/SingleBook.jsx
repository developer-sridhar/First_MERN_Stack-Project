import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const { _id, bookTitle, imageUrl } = useLoaderData()

    return (
        <div className='mt-28 px-4 lg:px-24'>
            <h2>Product ID: {_id}</h2>
            <img src={imageUrl} alt="" />
            
            <h2>{bookTitle}</h2>
        </div>
    );
};

export default SingleBook;


