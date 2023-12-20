import {
  ComponentCommunicationActionTypes,
  IComponentCommunicationAction
} from "../action/ComponentCommunicationAction.tsx";

interface IComponentCommunication{
  numeric: number,
  text: string,
  payee: string,
  date: string,
  itemSelected: string,
  itemKey: string,

}

const initialState = {
  numeric: 0.0,
  text: '',
  payee: '',
  date: '',
  itemSelected: '',
  itemKey: '',
};

export function ComponentCommunicationReducer(state : IComponentCommunication = initialState, action : IComponentCommunicationAction) {
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
    case ComponentCommunicationActionTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
