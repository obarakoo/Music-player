import React from 'react';
import SongBar from './SongBar';

const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
          key={`${song.key}-${artistId}-${i}`}
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          i={i}
          artistId={artistId}
          data={data}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
