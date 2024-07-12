// components/CountdownTimer.js
import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
       <div className="flex text-2xl md:text-5xl text-purple-600 font-bold justify-center space-x-6">       
        <div className="relative inline-flex h-12 w-12 mb-3 items-center justify-center rounded-md bg-white/90 p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px] md:min-h-[96px]" >
          <div className="absolute inset-1 flex flex-col gap-1">
            <span className="h-full w-full rounded-md bg-primary/10"></span>
            <span className="h-full w-full rounded-md bg-white"></span>
          </div>
          <span className="relative">{days}</span>
          <span className="absolute bottom-[-2.2rem] text-gray-300 text-sm md:text-xl">Days</span>
        </div >
        
        <span className='pt-1 md:pt-6'>:</span>
        <div className="relative inline-flex h-12 w-12 mb-3 items-center justify-center rounded-md bg-white/90 p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px] md:min-h-[96px]">
          <div className="absolute inset-1 flex flex-col gap-1">
            <span className="h-full w-full rounded-md bg-primary/10"></span>
            <span className="h-full w-full rounded-md bg-white"></span>
          </div>
          <span className="relative"> {hours}</span>
          <span className="absolute bottom-[-2.2rem] text-gray-300 text-sm md:text-xl">Hours</span>
        </div>
        <span className='pt-1 md:pt-6'>:</span>
        <div className="relative inline-flex h-12 w-12 mb-3 items-center justify-center rounded-md bg-white/90 p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px] md:min-h-[96px]">
          <div className="absolute inset-1 flex flex-col gap-1">
            <span className="h-full w-full rounded-md bg-primary/10"></span>
            <span className="h-full w-full rounded-md bg-white"></span>
          </div>
          <span className="relative">{minutes}</span>
          <span className="absolute bottom-[-2.2rem] text-gray-200 text-sm md:text-xl">Minutes</span>
        </div>
        <span className='pt-1 md:pt-6'>:</span>
        <div className="relative inline-flex h-12 w-12 mb-3 items-center justify-center rounded-md bg-white/90 p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px] md:min-h-[96px]">
          <div className="absolute inset-1 flex flex-col gap-1">
            <span className="h-full w-full rounded-md bg-primary/10"></span>
            <span className="h-full w-full rounded-md bg-white"></span>
          </div>
          <span className="relative">{seconds}</span>
          <span className="absolute bottom-[-2.2rem] text-gray-300 text-sm md:text-xl">Seconds</span>
        </div>
      </div >
    );
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownTimer;
