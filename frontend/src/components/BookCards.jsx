import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from 'flowbite-react';
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';

const BookCards = ({ headline, books, addToWishlist }) => {
    const addToWishlistHandler = (book) => {
        addToWishlist(book);
    };

    return (
        <div className='my-16 px-4 lg:px-24'>
            <h2 className='text-5xl text-center font-bold text-black my-5'>
                {headline}
            </h2>

            {/* Cards */}
            <div className='mt-12'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    {books.map(book => (
                        <SwiperSlide key={book._id}>
                            <Card key={book._id} className='bg-teal-200'>
                                <Link to={`/book/${book._id}`}>
                                <div className='relative'>
                                        <img src={book.imageUrl} alt="" className='text-gray-500 text-sm' />
                                        <div className='absolute top-3 right-3 bg-blue-600 p-1 rounded'>
                                            <MdOutlineFavorite className='w-4 h-4 text-white hover:text-red-600 ' />
                                        </div>
                                        <div className='absolute top-12 right-3 bg-blue-600 hover:bg-green-500 p-1 rounded'>
                                            <FaCartShopping className='w-4 h-4 text-white' />
                                        </div>
                                    </div>
                                    <div className='text-gray-700 text-sm'>
                                        <div className='text-sm'>
                                            <h6>{book.bookTitle}</h6>
                                            <p className='text-sm text-green-500'>{book.authorName}</p>
                                        </div>
                                        <div>
                                            <p className='text-base text-blue-600'>₹{book.bookPrice}</p>
                                    </div>
                                    </div>
                                </Link>
                                
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BookCards;
