import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <BiLoaderAlt className="w-32 h-32 animate-spin text-gray-200" />
    <h5 className="text-white text-2xl mt-4">{title || 'Loading...'}</h5>
  </div>
);

export default Loader;
