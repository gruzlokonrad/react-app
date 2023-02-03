import { Action } from '@remix-run/router';
import { ACTION } from './actionType';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION.ADD_COLUMN:
      return { ...state, columns: [...state.columns, payload] }

    case ACTION.ADD_CARD:
      return { ...state, cards: [...state.cards, payload] }

    case ACTION.SEARCH_STRING:
      return { ...state, search: payload.search }

    case ACTION.REMOVE_CARD:
      return { ...state, cards: [...state.cards.filter(card => payload !== card.id)] }

    case ACTION.ADD_LIST:
      return { ...state, lists: [...state.lists, payload] }

    case ACTION.TOGGLE_CARD_FAVORITE:
      return { ...state, cards: [...state.cards.map(card => (card.id === payload) ? { ...card, isFavorite: !card.isFavorite } : card)] }

    default:
      // console.log('default')
      break;
  }
  return state;
};

export default reducer;