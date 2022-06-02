import React from "react";
import SearchBar from "./SearchBar";
import youtubeRequest from "../api/youtube-request";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import words from "random-words";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount = async () => {
    this.onTermSubmit(words())
  }

  onTermSubmit = async (term) => {
      const response = await youtubeRequest.get("/search", {
        params: {
          q: term,
        },
      });
      this.setState({ videos: response.data.items,selectedVideo: response.data.items[0] });
  };

  onVideoSelect = video => {
    console.log('From the app!', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/>
              </div>
              <div className="five wide column">
                <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
                />
              </div>
            </div>
          </div>
          
        </div>
    );
  }
}

export default App;
