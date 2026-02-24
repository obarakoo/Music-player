import React from 'react';
import { Link } from 'react-router-dom';

const ArtistCard = ({ track }) => (
  <Link to={`/artists/${track?.artists[0]?.adamid}`}>
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <img
        className="w-full h-56 rounded-lg object-cover"
        src={track?.images?.background}
        alt="artist"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate">{track?.subtitle}</p>
    </div>
  </Link>
);

export default ArtistCard;
