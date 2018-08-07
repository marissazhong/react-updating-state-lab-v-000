// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: '1080p' } }
    }
  }

  handleClick = () => {
    count = this.state.timesClicked+1
    this.setState({
      timesClicked: count
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
