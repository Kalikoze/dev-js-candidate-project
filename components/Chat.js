import { Component } from 'react';

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  render() {
    const { input } = this.state;
    return (
      <section className='input-section'>
        <input
          placeholder='Chat with SpruceBot here...'
          value={input}
          onChange={e => this.setState({input: e.target.value})}
        />
      </section>
    );
  }
}
