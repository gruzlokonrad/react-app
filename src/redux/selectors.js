import compareStr from "../utils/strContains"
import { ACTION } from "./actionType";

export const getFilteredCards = ({cards, search}, columnId) => cards
  .filter(card => card.columnId === columnId && compareStr(card.title, search))
export const getAllColumns = state => state.columns
export const addColumn = payload => ({ type: ACTION.ADD_COLUMN, payload })
export const addCard = payload => ({type: ACTION.ADD_CARD, payload})
export const updateSearch = payload => ({type: ACTION.SEARCH_STRING, payload})
export const removeCard = payload => ({type: ACTION.REMOVE_CARD, payload})