const createActionName = actionName => `app/lists/${actionName}`;
const SEARCH_STRING = createActionName('SEARCH_STRING');

export const updateSearch = payload => ({ type: SEARCH_STRING, payload })

const searchStringReducer = (statePart = '', { type, payload }) => {
  switch (type) {
    case SEARCH_STRING:
      return payload;
    default:
      return statePart;
  }
}

export default searchStringReducer