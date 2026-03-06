import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPause';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-surface/40 backdrop-blur-xl border border-white/5 hover:bg-white/10 transition-all duration-300 shadow-glass rounded-2xl cursor-pointer group/card hover:-translate-y-2 animate-slideup">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song?.title ? 'flex bg-black bg-opacity-70' : 'hidden'
            }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          alt="song_img"
          src={song.images?.coverart}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {song?.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song?.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song?.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
