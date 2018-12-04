import React from 'react';
import MusicDetail from './music_detail';

const MusicList = (props) => {
    
  const musicNodes = props.songs.map((song, index) => {
    return (
          <MusicDetail key={index} song={song}/>
        )
    })
    
        return(
            <div className="music-list">
                {musicNodes}
            </div>
        )
    
}

export default MusicList