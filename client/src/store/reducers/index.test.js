import * as reducers from './index';
import * as types from './action-types';

const initialDefaultState = {
  locationData: '',
};
// eslint-disable-next-line no-undef
describe('rootReducer reducer', () => {
  // eslint-disable-next-line no-undef
  it('should return the initial state', () => {
    // eslint-disable-next-line no-undef
    expect(reducers.rootReducer(undefined, {})).toEqual(
      {
        locationData: '',
        locationType: 'name',
        loading: true,
        loaded: false,
        error: false,
      }
    );
  });
  // eslint-disable-next-line no-undef
  it('should handle SET_LOCATION_RADIO_INPUT', () => {
    // eslint-disable-next-line no-undef
    expect(
      reducers.rootReducer(initialDefaultState, {
        type: types.GET_WEATHER_DATA,
        payload: 'name',
      })
    ).toEqual(
      {
        locationType: 'name',
      }
    );
  });
});

// eslint-disable-next-line no-redeclare
const initialDefaultState = {
  locationType: 'name',
  isPending: true,
};
// eslint-disable-next-line no-undef
describe('rootReducer reducer', () => {
  // eslint-disable-next-line no-undef
  it('should return the initial state', () => {
    // eslint-disable-next-line no-undef
    expect(reducers.rootReducer(undefined, {})).toEqual(
      {
        locationType: 'name',
        isPending: true,
      }
    );
  });

  // eslint-disable-next-line no-undef
  it('should handle LOADED_WEATHER_DATA action', () => {
    // eslint-disable-next-line no-undef
    expect(
      reducers.rootReducer(initialDefaultState, {
        type: types.LOADED_WEATHER_DATA,
        payload: {isPending: true},
      })
    ).toEqual(
      {
        locationType: 'name',
        isPending: true,
      }
    );
  });
  // eslint-disable-next-line no-undef
  it('should handle LOADED_WEATHER_DATA action', () => {
    // eslint-disable-next-line no-undef
    expect(
      reducers.rootReducer(initialDefaultState, {
        type: types.LOADED_WEATHER_DATA,
        payload: [{
          locationType: 'name',
        }],
      })
    ).toEqual(
      {
        cities: [{
          locationType: 'name',
        }],
        isPending: false,
      }
    );
  });
  // eslint-disable-next-line no-undef
  it('should handle ERROR_WEATHER_DATA action', () => {
    // eslint-disable-next-line no-undef
    expect(
      reducers.rootReducer(initialDefaultState, {
        type: types.ERROR_WEATHER_DATA,
        payload: 'NOOO!',
      })
    ).toEqual(
      {
        error: 'NOOO',
        locationType: 'name',
        isPending: true,
      }
    );
  });
});
