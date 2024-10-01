import React from 'react';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const CountShower = () => {

    const [counterState, setCounterState] = useState(false)


    return (
        <div>
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                <div className='grid grid-cols-1 md:grid-cols-4  gap-4 px-7'>
                    <div className='border-r-2 border-blue-600 p-8 '>
                        <p className='text-3xl text-center'>{counterState &&
                            <CountUp
                                start={0}
                                end={100}
                                duration={1.75}></CountUp>
                        }</p>
                        <p className='text-2xl text-center'>students</p>
                    </div>

                    <div className='border-r-2 border-blue-600 p-8 '>
                        <p className='text-3xl text-center'>{counterState &&
                            <CountUp
                                start={0}
                                end={30}
                                duration={1.75}></CountUp>
                        } </p>
                        <p className='text-2xl text-center'>students</p>
                    </div>

                    <div className='border-r-2 border-blue-600 p-8 '>
                        <p className='text-3xl text-center'>{counterState &&
                            <CountUp
                                start={0}
                                end={500}
                                duration={1.75}></CountUp>
                        } </p>
                        <p className='text-2xl text-center'>students</p>
                    </div>

                    <div className='  p-8 '>
                        <p className='text-3xl text-center'>{counterState &&
                            <CountUp
                                start={0}
                                end={150}
                                duration={1.75}></CountUp>
                        } </p>
                        <p className='text-2xl text-center'>students</p>
                    </div>

                </div>
            </ScrollTrigger>
        </div>
    );
};

export default CountShower;