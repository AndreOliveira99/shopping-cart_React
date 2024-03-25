import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import './Loading.css';

function Loading() {
  return (
    <div className="loading__container">
      <AiOutlineLoading3Quarters className="loading" />
    </div>
  );
}

export default Loading;
