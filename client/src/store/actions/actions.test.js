import * as actions from './action-types';
import * as types from './index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const mockStore = configureMockStore([thunk]);

// eslint-disable-next-line no-undef
describe('action-types', () => {
  // eslint-disable-next-line no-undef
  it('should create an action to search', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: types.GET_WEATHER_DATA,
      payload: text,
    };
    // eslint-disable-next-line no-undef
    expect(actions.fetchWeatherData(text)).toEqual(expectedAction);
  });
});

// eslint-disable-next-line no-undef
describe('Fetch weather forcast PENDING', () => {
  // eslint-disable-next-line no-undef
  it('handles changing a checking status and fetches the weather', () => {
    const store = mockStore();
    store.dispatch(actions.fetchWeatherData());
    const action = store.getActions();
    // eslint-disable-next-line no-undef
    expect(action[0]).toEqual({type: 'GET_WEATHER_DATA'});
  });
});
