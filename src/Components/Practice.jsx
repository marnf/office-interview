import React from 'react';
import { Carousel } from "flowbite-react";
import pic3 from '../assets/pic3.jpeg';
import pic4 from '../assets/pic4.jpg'

const Practice = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-3">
            <Carousel className='container m-auto my-5 p-y-8'>

                <div className="flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white p-5 ">
                    <div className='flex items-center m-auto justify-center p-5'>
                        <div className='w=1/2 p-2'>
                            <h2 className='text-black'>Guide your every steps of the way</h2>
                            <p className='text-gray-600'>unlock your potential with us</p>
                            <button className='bg-blue-600 border rounded p-3'>contact us</button>
                        </div>
                        <div className='w-1/2 p-2'>
                            <img src={pic4} alt="" />
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white p-5 ">
                    <div className='flex items-center m-auto justify-center p-5'>
                        <div className='w-1/2 p-2'>
                            <img src={pic3} alt="" />
                        </div>
                        <div className='w=1/2 p-2'>
                            <h2 className='text-black'>Guide your every steps of the way</h2>
                            <p className='text-gray-600'>unlock your potential with us</p>
                            <button className='bg-blue-600 border rounded p-3'>contact us</button>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default Practice;