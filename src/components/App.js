import React from "react";
import SearchBar from "./SearchBar";
import youtubeRequest from "../api/youtube-request";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    if (term === "") {
      this.setState({ videos: [] });
    } else {
      const result = await youtubeRequest.get("/search", {
        params: {
          q: term,
        },
      });
      this.setState({ videos: result.data.items });
    }
  };

  onVideoSelect = video => {
    console.log('From the app!', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
    );
  }
}

export default App;
