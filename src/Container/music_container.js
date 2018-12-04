import React from 'react';
import MusicDetail from '../Components/music_detail';
import MusicList from '../Components/music_list';

class MusicContainer extends React.Component{
   constructor(props){
       super(props)

       this.state = {
           songs: []
       }
   }

    componentDidMount() {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(response => response.json())
            .then(data => this.setState({
                songs: data.feed.entry}))
    }


    render(){
        return(
            <div className="music-container">
                <p>Top 20</p>
                <MusicList songs = {this.state.songs}/>
                <MusicDetail/>
            </div>
        )
    }
}

export default MusicContainer