import React, { Component } from 'react';

export default class PlayControls extends Component {
  constructor() {
    super();
    this.state = {
      track: 1,
      isPlaying: true
    };
  }

  componentDidMount() {
    this.audio.volume = 0.6;
  }

  render() {
    const { track, isPlaying } = this.state;

    return (
      <section className='play-controls'>
        <audio src={`../static/music/track${track}.mp3`} ref={node => this.audio = node} autoPlay loop />
        <img src='../static/play-controls/rewind.svg'
          onClick={() => {
            if(track === 1) {
              return this.setState({ track: 4, isPlaying: true });
            }
            this.setState({track: track - 1, isPlaying: true});
          }}
        />
        <img
          src={isPlaying ? '../static/play-controls/pause-button.svg' : '../static/play-controls/play-button.svg'}
          onClick={() => (isPlaying ? this.audio.pause() : this.audio.play(), this.setState({ isPlaying: !isPlaying }))}
        />
        <img src='../static/play-controls/fast-forward.svg'
          onClick={() => {
            if(track === 4) {
              return this.setState({ track: 1, isPlaying: true });
            }
            this.setState({track: track + 1, isPlaying: true});
          }}
        />
        <style jsx>{`
          .play-controls {
            position: absolute;
            right: 20px;
            top: 10px;
          }

          img {
            cursor: pointer;
            height: 40px;
            margin: 20px;
            opacity: 0.7;
            width: 40px;
          }

          img:hover {
            opacity: 1;
          }

          img:active {
            transform: scale(1.2);
          }
        `}</style>
      </section>
    );
  }
}
