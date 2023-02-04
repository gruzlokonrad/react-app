
export const getAllColumns = state => state.columns
export const getColumnsById = ({ columns }, listId) => columns
  ?.filter(column => column.listId === listId)

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

export const addColumn = payload => ({ type: ADD_COLUMN, payload })

const columnsReducer = (statePart = [], { type, payload }) => {
  switch (type) {
    case ADD_COLUMN:
      return [...statePart, payload];
    default:
      return statePart;
  }
}

export default columnsReducer