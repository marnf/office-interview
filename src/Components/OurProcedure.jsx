import React from 'react';

const OurProcedure = () => {
    return (
        <div className='p-5'>
            <div className='py-4'>
                <h2 className='text-center text-3xl'>Our Procedure</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4  gap-5 px-7'>
                <div className='border rounded py-3 transition ease-in-out delay-150 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300'>
                    <p className='text-3xl text-center'>1</p>
                    <p className='text-center'>create your account</p>
                </div>

                <div className='border rounded py-3 transition ease-in-out delay-150 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300'>
                    <p className='text-3xl text-center'>2</p>
                    <p className='text-center'>update your profile</p>
                </div>

                <div className='border rounded py-3 transition ease-in-out delay-150 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300'>
                    <p className='text-3xl text-center'>3</p>
                    <p className='text-center'>choice your dream university</p>
                </div>

                <div className='border rounded py-3 transition ease-in-out delay-150 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300'>
                    <p className='text-3xl text-center'>4</p>
                    <p className='text-center'>now relax. we will handle it</p>
                </div>

            </div>
        </div>
    );
};

export default OurProcedure;