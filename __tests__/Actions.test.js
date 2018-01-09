import fetchMock from 'fetch-mock';
import { postMessage, fetchRandomJoke, fetchNerdyJoke, fetchExplicitJoke } from '../store';

describe('actions', () => {
  it('should post a message', () => {
    fetchMock.post('/api/v1/message', {
      method: 'POST',
      body: { message: 'Hello SpruceBot!  How are you?'},
      headers: {
        'Content-Type': 'application/json'
      },
    });
    expect(fetchMock.routes[0].method).toEqual('post');
    expect(fetchMock.routes[0].response.body).toEqual({message: 'Hello SpruceBot!  How are you?'})
    console.log(postMessage())
    // expect(postMessage()).toEqual('')
  });
});
