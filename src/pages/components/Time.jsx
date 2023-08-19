'use client'
import React, { useState, useEffect } from 'react'
import { format } from 'date-fns';

const Time = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 60000); // Update every minute (60,000 milliseconds)

        return () => {
            clearInterval(interval);
        };
    }, []);

    const formattedDate = format(currentDate, 'dd-MMM-yyyy hh:mm aa');


    return (
        <div className='w-full max-w-7xl'>
            <span className='flex justify-start gap-1 items-center'>
                <i className='bx bxs-time' ></i>
                <h4>{formattedDate}</h4>
            </span>
        </div>
    )
}

export default Time