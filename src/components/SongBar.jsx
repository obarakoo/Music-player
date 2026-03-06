import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPause';

const SongBar = ({ song, i, artistId, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-white/10 hover:shadow-glow transition-all duration-300 ${activeSong?.title === song?.title ? 'bg-white/10 backdrop-blur-md shadow-glass border border-white/5' : 'bg-surface-light/30 backdrop-blur-sm'
        } py-2 p-4 rounded-xl border border-transparent cursor-pointer mb-2`}
    >
      <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg object-cover"
          src={song?.images?.coverart || song?.attributes?.artwork?.url?.replace('{w}', '100').replace('{h}', '100')}
          alt={song?.title}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          {artistId ? (
            <p className="text-xl font-bold text-white">{song?.attributes?.name || song?.title}</p>
          ) : (
            <Link to={`/songs/${song.key}`}>
              <p className="text-xl font-bold text-white">{song?.title}</p>
            </Link>
          )}
          <p className="text-base text-gray-300 mt-1">
            {artistId ? (
              song?.attributes?.albumName
            ) : (
              <Link to={`/artists/${song?.artists?.[0]?.adamid}`}>
                {song?.subtitle}
              </Link>
            )}
          </p>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
};

export default SongBar;