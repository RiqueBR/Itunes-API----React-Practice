import React from 'react'

const MusicDetail = (props) => {
    if(!props.song) return null;

    return (
        <div className="single-tune">
            <p>Position:{props.song.index}</p>
            <p key={props.song.index}>{props.song.title.label}</p>
        </div>
    )
    
}

export default MusicDetail