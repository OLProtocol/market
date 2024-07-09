// components/ProgressBar.js

import React from 'react';

const ProgressBar = ({ start, current, target }) => {
  const percentage = (((current - start) / (target - start)) * 100).toFixed(2);

  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className="bg-purple-500 text-xs leading-none py-1 text-center text-white rounded-full"
        style={{ width: `${percentage}%` }}
      >
        {percentage} %
      </div>
    </div>
  );
};

export default ProgressBar;
