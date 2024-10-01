import React from 'react';

const CountShower = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4  gap-4 px-7'>
                <div className='border-r-2 border-blue-600 p-8 '>
                    <p className='text-3xl text-center'>500 </p>
                    <p className='text-2xl text-center'>students</p>
                </div>

                <div className='border-r-2 border-blue-600 p-8 '>
                    <p className='text-3xl text-center'>500 </p>
                    <p className='text-2xl text-center'>students</p>
                </div>

                <div className='border-r-2 border-blue-600 p-8 '>
                    <p className='text-3xl text-center'>500 </p>
                    <p className='text-2xl text-center'>students</p>
                </div>

                <div className='  p-8 '>
                    <p className='text-3xl text-center'>500 </p>
                    <p className='text-2xl text-center'>students</p>
                </div>

            </div>
        </div>
    );
};

export default CountShower;