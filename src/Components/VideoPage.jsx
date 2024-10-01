import React from 'react';

const VideoPage = () => {
    return (
        <div className='bg-blue-300 m-auto p-3'>
            <h1 className='text-center text-4xl p-7'>Find your perfect study destination</h1>
            <div className='justify-center p-4'>
                <video className='m-auto rounded-2xl' width="600" height="400" controls>
                    <source src="" type="video/mp4" />

                </video>
            </div>
        </div>
    );
};

export default VideoPage;