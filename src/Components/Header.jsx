import React from 'react';






const Header = () => {

   
    return (
        <div className='bg-gray-300 w-full'>
            <div className="navbar bg-base-100 px-6 ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">EDUWISH</a>
                </div>
                <div className="flex-none">
                    <div className='flex items-center'>
                        <a className='border p-3 rounded bg-blue-400 text-center text-white ' href="">bangla</a>
                        <a className='border p-3 rounded bg-white text-blue ' href="">eng</a>
                        <a className='bg-blue-400 border rounded text-white p-4 ms-3' href="">sign up</a>
                        <a className='bg-white border rounded text-blue p-5 ms-4' href="">Log in</a>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default Header;



