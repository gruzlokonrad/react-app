import { ACTION } from './actionType';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_COLUMN:
      return { ...state, columns: [...state.columns, action.payload] }

    case ACTION.ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload] }

    case ACTION.SEARCH_STRING:
      return { ...state, search: action.payload.search }

    case ACTION.REMOVE_CARD:
      return { ...state, cards: [...state.cards.filter(card => action.payload !== card.id)]}

    default:
      // console.log('default')
      break;
  }
  return state;
};

export default reducer;