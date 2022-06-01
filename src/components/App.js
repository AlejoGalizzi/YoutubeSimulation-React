import React from "react";
import SearchBar from "./SearchBar";
import youtubeRequest from "../api/youtube-request";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {videos: []}

  onTermSubmit = async (term) => {
    const result = await youtubeRequest.get('/search', {
                    params: {
                      q: term
                    }
                  });
    this.setState({videos: result.data.items});
  }

  render() {
    return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit}/>
      <VideoList videos={this.state.videos}/>  
    </div>
    );
  }
}

export default App;
