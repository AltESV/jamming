
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1}, 
                      {name: 'name2', artist: 'artist2', album: 'album2', id: 2}, 
                      {name: 'name3', artist: 'artist3', album: 'album3', id: 3}],
      PlaylistName: 'My Playlist',  
      PlaylistTracks: [{name: 'PlaylistName1', artist: 'PlaylistArtist1', album: 'PlaylistAlbum1', id: 4},
                        {name: 'PlaylistName2', artist: 'PlaylistArtist2', album: 'PlaylistAlbum2', id: 5}, 
                        {name: 'PlaylistName3', artist: 'PlaylistArtist3', album: 'PlaylistAlbum3', id: 6}]

    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.PlaylistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({PlaylistTracks: tracks})
  }

    removeTrack(track) {
      let tracks = this.state.PlaylistTracks;
      tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
      this.setState({ PlaylistTracks: tracks });
    }

    updatePlaylistName(name) {
      this.setState({PlaylistName: name})
    }
    
    savePlaylist() {
      const trackUris = this.state.PlaylistTracks.map(track => track.uri);
    }

    search(term) {
      console.log(term);
    }

  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            
            <SearchBar onSearch = {this.search} />

            <div className="App-playlist">
            
            <SearchResults SearchResults={this.state.SearchResults}
            onAdd={this.addTrack} />

            <Playlist PlaylistName={this.state.PlaylistName} 
                      PlaylistTracks={this.state.PlaylistTracks}  
                      onRemove = {this.removeTrack} 
                      onNameChange = {this.updatePlaylistName} 
                      onSave = {this.savePlaylist} />
            
            </div>
          </div>
      </div>
    )
  }
} 

export default App;
