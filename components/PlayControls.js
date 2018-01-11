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
        <img
          src='../static/play-controls/rewind.svg'
          onClick={() => track === 1 ? this.setState({ track: 4, isPlaying: true }) : this.setState({track: track - 1, isPlaying: true})}
        />
        <img
          src={isPlaying ? '../static/play-controls/pause-button.svg' : '../static/play-controls/play-button.svg'}
          onClick={() => (isPlaying ? this.audio.pause() : this.audio.play(), this.setState({ isPlaying: !isPlaying }))}
        />
        <img
          src='../static/play-controls/fast-forward.svg'
          onClick={() => track === 4 ? this.setState({ track: 1, isPlaying: true }) : this.setState({track: track + 1, isPlaying: true})}
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
          }

          img:hover {
            opacity: 1;
          }

          img:active {
            transform: scale(1.2);
          }

          @media (max-width: 950px) {
            img {
              height: 25px;
            }
          }

          @media (max-width: 700px) {
            .play-controls {
              align-items: center;
              display: flex;
              justify-content: center;
              left: 0;
              margin: auto;
              right: 0;
            }
          }
        `}</style>
      </section>
    );
  }
}
