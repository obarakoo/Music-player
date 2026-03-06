import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat size={20} className={`hidden sm:block cursor-pointer transition-colors ${repeat ? 'text-secondary' : 'text-gray-400 hover:text-white'}`} onClick={() => setRepeat((prev) => !prev)} />
    {currentSongs?.length && <MdSkipPrevious size={30} className="cursor-pointer text-white hover:text-accent transition-colors" onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill size={45} onClick={handlePlayPause} className="cursor-pointer text-white hover:text-primary transition-colors" />
    ) : (
      <BsFillPlayFill size={45} onClick={handlePlayPause} className="cursor-pointer text-white hover:text-primary transition-colors" />
    )}
    {currentSongs?.length && <MdSkipNext size={30} className="cursor-pointer text-white hover:text-accent transition-colors" onClick={handleNextSong} />}
    <BsShuffle size={20} className={`hidden sm:block cursor-pointer transition-colors ${shuffle ? 'text-secondary' : 'text-gray-400 hover:text-white'}`} onClick={() => setShuffle((prev) => !prev)} />
  </div>
);

export default Controls;
