import {
  ComponentCommunicationActionTypes,
  IComponentCommunication,
  IComponentCommunicationAction,
} from '../action/ComponentCommunicationAction.tsx';

const initialState = {
  numeric: 0.0,
  text: '',
  payee: '',
  date: 0,
  id: '',
  itemSelected: '',
  itemKey: '',
  from: '',
  to: '',
  index: 0,
};

export function ComponentCommunicationReducer(
  state: IComponentCommunication = initialState,
  action: IComponentCommunicationAction,
) {
  switch (action.type) {
    case ComponentCommunicationActionTypes.RETURN_NUMERIC:
      return {
        ...state,
        numeric: action.number,
      };
    case ComponentCommunicationActionTypes.RETURN_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ComponentCommunicationActionTypes.RETURN_ITEM_SELECTED:
      return {
        ...state,
        itemSelected: action.itemSelected,
      };

    case ComponentCommunicationActionTypes.RETURN_DATE:
      return {
        ...state,
        date: action.date,
      };

    case ComponentCommunicationActionTypes.RETURN_PAYEE:
      return {
        ...state,
        payee: action.payee,
      };
    case ComponentCommunicationActionTypes.RETURN_ITEM_KEY:
      return {
        ...state,
        itemKey: action.itemKey,
      };

    case ComponentCommunicationActionTypes.RETURN_FROM:
      return {
        ...state,
        from: action.from,
      };

    case ComponentCommunicationActionTypes.RETURN_TO:
      return {
        ...state,
        to: action.to,
      };
    case ComponentCommunicationActionTypes.RETURN_INDEX:
      return {
        ...state,
        index: action.index,
      };

    case ComponentCommunicationActionTypes.RETURN_ID:
      return {
        ...state,
        id: action.id,
      };
    case ComponentCommunicationActionTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
