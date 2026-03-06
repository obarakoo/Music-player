import React from 'react';
import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artist || artistData?.artists?.[artistId]?.attributes;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-background sm:h-48 h-28 rounded-l-3xl" />

      <div className="absolute inset-0 flex items-center bg-surface/30 backdrop-blur-sm rounded-l-3xl p-4 border border-white/5 shadow-glass">
        <img
          alt="profile"
          src={
            artistId
              ? artist?.artwork?.url?.replace('{w}', '500').replace('{h}', '500') || artist?.profile_picture?.['500x500'] || artist?.profile_picture?.['150x150']
              : songData?.images?.coverart
          }
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-4 border-surface shadow-glow"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-4xl text-2xl text-white drop-shadow-md">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists?.[0]?.adamid}`}>
              <p className="text-lg text-gray-300 hover:text-primary transition-colors mt-2">{songData?.subtitle}</p>
            </Link>
          )}

          <p className="text-base text-accent mt-2 font-medium">
            {artistId ? (artist?.genreNames?.[0] || artist?.genre) : (songData?.genres?.primary || songData?.genre)}
          </p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
