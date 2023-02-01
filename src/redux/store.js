import { createStore } from 'redux';
import initialState from './initialState';
import { ACTION } from './actionType';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_COLUMN:
      return { ...state, columns: [...state.columns, action.payload] }

    case ACTION.ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload] }

    default:
      console.log('default')
      break;
  }
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;