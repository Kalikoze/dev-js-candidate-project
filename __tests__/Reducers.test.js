import { newJoke, watsonResponse } from '../store';

describe('reducers', () => {
  describe('newJoke', () => {
    it('should have a default state', () => {
      expect(newJoke(undefined, {})).toEqual({});
    });

    it('should give back a joke', () => {
      const joke = 'Sure thing! Let me think... Chuck Norris can spawn threads that complete before they are started.';

      const action = {
        type: 'RANDOM_JOKE',
        joke
      };

      expect(newJoke(undefined, action)).toEqual({ currentJoke: joke });
    });
  });

  describe('watsonResponse', () => {
    it('should have a default state', () => {
      expect(watsonResponse(undefined, {})).toEqual({});
    });
  });

  it('should give back a response that has a message and intent', () => {
    const action = {
      type: 'POST_MESSAGE',
      message: 'Sure thing! Let me think of something more explicit... China lets Chuck Norris search for porn on Google.',
      intent: 'explicitjoke'
    };

    expect(watsonResponse(undefined, action)).toEqual({ response: { message: action.message, intent: 'explicitjoke' }});
  });
});
