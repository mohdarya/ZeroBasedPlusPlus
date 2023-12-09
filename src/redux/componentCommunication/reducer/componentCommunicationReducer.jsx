const initialState = {
  numeric: 0.0,
  text: '',
  itemSelected: '',
};

export function ComponentCommunicationReducer(state = initialState, action) {
  switch (action.type) {
    case 'RETURN_NUMERIC':
      return {
        ...state,
        numeric: action.numeric,
      };
    case 'RETURN_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'RETURN_ITEM_SELECTED':
      return {
        ...state,
        itemSelected: action.itemSelected,
      };
    case 'CLEAR_DATA':
      return initialState;

    default:
      return state;
  }
}
