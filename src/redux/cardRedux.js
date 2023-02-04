import compareStr from "../utils/strContains"

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  ?.filter(card => card.columnId === columnId && compareStr(card.title, searchString))

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const REMOVE_CARD = createActionName('REMOVE_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite === true)
export const addCard = payload => ({ type: ADD_CARD, payload })
export const removeCard = payload => ({ type: REMOVE_CARD, payload })
export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload })

const cardsReducer = (statePart = [], { type, payload }) => {
  switch (type) {
    case ADD_CARD:
      return [...statePart, payload]
    case TOGGLE_CARD_FAVORITE:
      return [...statePart?.map(card => (card.id === payload) ? { ...card, isFavorite: !card.isFavorite } : card)]
    case REMOVE_CARD:
      return [...statePart?.filter(card => payload !== card.id)]

    default:
      return statePart;
  }
}

export default cardsReducer