import React, { Component } from "react";
import songs from "./services/songs";
import SongCard from "./components/SongCard";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: songs,
    };
  }

  sortByTitle = () => {
    this.setState({
      songs: [...this.state.songs.sort((a, b) => a.title.localeCompare(b.title))],
    });
  };

  sortByRating = () => {
    this.setState({
      songs: [...this.state.songs.sort((a, b) => b.rating - a.rating)],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Super Tunes</h1>
          <div className="sort-buttons">
            <button onClick={this.sortByTitle}>Sort by Title</button>
            <button onClick={this.sortByRating}>Sort by Rating</button>
          </div>
        </div>
        <div className="song-list">
          {this.state.songs.map((song) => (
            <SongCard key={song.title} data={song} />
          ))}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  songs: PropTypes.array,
};

export default App;
