import collections from './shop.data';

const INITIAL_STATE = {
  collections,
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default shopReducer;
