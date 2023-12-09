export function returnItemSelected(itemSelected) {
  return {
    type: 'RETURN_ITEM_SELECTED',
    itemSelected,
  };
}

export function returnNumeric(numeric) {
  return {
    type: 'RETURN_NUMERIC',
    numeric,
  };
}

export function returnText(text) {
  return {
    type: 'RETURN_TEXT',
    text,
  };
}

export function clearData() {
  return {
    type: 'CLEAR_DATA',
  };
}
