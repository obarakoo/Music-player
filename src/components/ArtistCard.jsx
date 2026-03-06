import React from 'react';
import { Link } from 'react-router-dom';

const ArtistCard = ({ track }) => (
  <Link to={`/artists/${track?.artists[0]?.adamid}`}>
    <div className="flex flex-col w-[250px] p-4 bg-surface/40 backdrop-blur-xl border border-white/5 hover:bg-white/10 transition-all duration-300 shadow-glass rounded-2xl cursor-pointer group hover:-translate-y-2 animate-slideup">
      <img
        className="w-full h-56 rounded-lg object-cover group-hover:shadow-glow transition-all duration-300"
        src={track?.images?.background}
        alt="artist"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate group-hover:text-primary transition-colors">{track?.subtitle}</p>
    </div>
  </Link>
);

export default ArtistCard;
