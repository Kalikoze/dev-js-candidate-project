import fetchMock from 'fetch-mock';
import { message, randomJoke, nerdyJoke, explicitJoke } from '../store';

describe('actions', () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  describe('message', () => {
    it('should return a message & intent', () => {
      const watsonResponse = {
        message: 'Sure thing! Let me think of something more explicit... China lets Chuck Norris search for porn on Google.',
        intent: 'explicitjoke'
      };

      const expectedAction = {
        type: 'POST_MESSAGE',
        message: 'Sure thing! Let me think of something more explicit... China lets Chuck Norris search for porn on Google.',
        intent: 'explicitjoke'
      };
      expect(message(watsonResponse)).toEqual(expectedAction);
    });
  });

  describe('postMessage', () => {
    it('should mock posting a message', () => {
      fetchMock.post('/api/v1/message', {
        method: 'POST',
        body: { message: 'Hello SpruceBot!  How are you?'},
        headers: {
          'Content-Type': 'application/json'
        },
      });

      expect(fetchMock.routes[0].response.method).toEqual('POST');
      expect(fetchMock.routes[0].response.headers).toEqual({ 'Content-Type': 'application/json' });
      expect(fetchMock.routes[0].response.body).toEqual({message: 'Hello SpruceBot!  How are you?'});
    });
  });

  describe('randomJoke', () => {
    it('should return a random joke', () => {
      const joke = 'Sure thing! Let me think... Chuck Norris can spawn threads that complete before they are started.';

      const expectedAction = {
        type: 'RANDOM_JOKE',
        joke
      };

      expect(randomJoke(joke)).toEqual(expectedAction);
    });
  });

  describe('fetchRandomJoke', () => {
    it('should mock fetching a random joke', () => {
      const joke = 'Sure thing! Let me think... Chuck Norris can spawn threads that complete before they are started.';

      fetchMock.get('http://api.icndb.com/jokes/random/?escape=javascript', {
        method: 'GET',
        status: 200,
        body: joke
      });

      expect(fetchMock.routes[0].response.method).toEqual('GET');
      expect(fetchMock.routes[0].response.status).toEqual(200);
      expect(fetchMock.routes[0].response.body).toEqual(joke);
    });
  });

  describe('nerdyJoke', () => {
    it('should return a nerdy joke', () => {
      const joke = 'Lolz I got a joke that is especially nerdy for ya! Chuck Norris went out of an infinite loop.';

      const expectedAction = {
        type: 'NERDY_JOKE',
        joke
      };

      expect(nerdyJoke(joke)).toEqual(expectedAction);
    });
  });

  describe('fetchNerdyJoke', () => {
    it('should mock fetching a nerdy joke', () => {
      const joke = 'Lolz I got a joke that is especially nerdy for ya! Chuck Norris went out of an infinite loop.';

      fetchMock.get('http://api.icndb.com/jokes/random?limitTo=[nerdy]', {
        method: 'GET',
        status: 200,
        body: joke
      });

      expect(fetchMock.routes[0].response.method).toEqual('GET');
      expect(fetchMock.routes[0].response.status).toEqual(200);
      expect(fetchMock.routes[0].response.body).toEqual(joke);
    });
  });

  describe('explicitJoke', () => {
    it('should return an explicit joke', () => {
      const joke = 'Sure thing! Let me think of something more explicit... China lets Chuck Norris search for porn on Google.';

      const expectedAction = {
        type: 'EXPLICIT_JOKE',
        joke
      };

      expect(explicitJoke(joke)).toEqual(expectedAction);
    });
  });

  describe('fetchExplicitJoke', () => {
    it('should mock fetching an explicit joke', () => {
      const joke = 'Sure thing! Let me think of something more explicit... China lets Chuck Norris search for porn on Google.';

      fetchMock.get('http://api.icndb.com/jokes/random?limitTo=[explicit]', {
        method: 'GET',
        status: 200,
        body: joke
      });

      expect(fetchMock.routes[0].response.method).toEqual('GET');
      expect(fetchMock.routes[0].response.status).toEqual(200);
      expect(fetchMock.routes[0].response.body).toEqual(joke);
    });
  });
});
