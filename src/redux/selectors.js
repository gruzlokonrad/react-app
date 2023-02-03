import compareStr from "../utils/strContains"
import { ACTION } from "./actionType";

export const getFilteredCards = ({ cards, search }, columnId) => cards
  .filter(card => card.columnId === columnId && compareStr(card.title, search))
export const getAllColumns = state => state.columns
export const getColumnsById = ({ columns }, listId) => columns.filter(column => column.listId === listId)
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)
export const getAllLists = ({ lists }) => lists
export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite === true)

export const addColumn = payload => ({ type: ACTION.ADD_COLUMN, payload })
export const addCard = payload => ({ type: ACTION.ADD_CARD, payload })
export const updateSearch = payload => ({ type: ACTION.SEARCH_STRING, payload })
export const removeCard = payload => ({ type: ACTION.REMOVE_CARD, payload })
export const addList = payload => ({type: ACTION.ADD_LIST, payload})
export const toggleCardFavorite = payload => ({type: ACTION.TOGGLE_CARD_FAVORITE, payload})