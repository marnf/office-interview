import React, { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const VideoPage = () => {

    const [moveState, setMoveState] = useState(false)

    useEffect(() => {
        const moveObject = (id, animationClass) => {
            const element = document.getElementById(id);
            if(element && moveState){
                element.classList.add(animationClass)
            }
            else if( element){
                element.classList.remove(animationClass)
            }

        };

        moveObject("video-banner", "animate-move-right");
    }, [moveState]);


    return (
        <div  className='bg-blue-300 m-auto p-3'>
            <h1 className='text-center text-4xl p-7'>Find your perfect study destination</h1>
            <div className='justify-center p-4'>

            <ScrollTrigger onEnter={() => setMoveState(true)} onExit={() => setMoveState(false)}>
            <video id='video-banner' className={`m-auto rounded-2xl ${moveState ? 'animate-move-right' : ''}`} width="600" height="400" controls>
                    <source src="" type="video/mp4" />

                </video>
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default VideoPage;