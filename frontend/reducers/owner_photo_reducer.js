import { RECEIVE_INDEXED_IMAGES, RECEIVE_USER_IMAGES } from '../actions/photo_actions';

export default (oldState = {}, action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER_IMAGES:
      return Object.assign({}, action.photos);
    default:
      return oldState;
  };
};