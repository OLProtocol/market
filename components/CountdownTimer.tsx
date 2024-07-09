// components/CountdownTimer.js
import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex justify-center space-x-4">
        <div className="text-center">
          <div className="pt-5 text-4xl h-20 w-20 bg-white/10 rounded-lg">
            {days}
          </div>
          <div>Days</div>
        </div>
        <div className="text-center">
          <div className="pt-5 text-4xl h-20 w-20 bg-white/10 rounded-lg">
            {hours}
          </div>
          <div>Hours</div>
        </div>
        <div className="text-center">
          <div className="pt-5 text-4xl h-20 w-20 bg-white/10 rounded-lg">
            {minutes}
          </div>
          <div>Minutes</div>
        </div>
        <div className="text-center">
          <div className="pt-5 text-4xl h-20 w-20 bg-white/10 rounded-lg">
            {seconds}
          </div>
          <div>Seconds</div>
        </div>
      </div>
    );
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownTimer;
