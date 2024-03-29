export enum ComponentCommunicationActionTypes {
  RETURN_ITEM_SELECTED = 'RETURN_ITEM_SELECTED',
  RETURN_ITEM_KEY = 'RETURN_ITEM_KEY',
  RETURN_NUMERIC = 'RETURN_NUMERIC',
  RETURN_TEXT = 'RETURN_TEXT',
  RETURN_DATE = 'RETURN_DATE',
  RETURN_PAYEE = 'RETURN_PAYEE',
  CLEAR_DATA = 'CLEAR_DATA',
  RETURN_FROM = 'RETURN_FROM',
  RETURN_TO = 'RETURN_TO',
  RETURN_INDEX = 'RETURN_INDEX',
  RETURN_ID = 'RETURN_ID',
}

export interface IComponentCommunication {
  numeric: number;
  text: string;
  payee: string;
  date: number;
  id: string;
  itemSelected: string;
  itemKey: string;
  from: string;
  to: string;
  index: number;
}

interface IReturnItemSelected {
  type: string;
  itemSelected: string;
}
interface IReturnItemKey {
  type: string;
  itemKey: string;
}

interface IReturnNumeric {
  type: string;
  number: number;
}

interface IReturnText {
  type: string;
  text: string;
}

interface IReturnPayee {
  type: string;
  payee: string;
}

interface IReturnDate {
  type: string;
  date: number;
}

export interface IReturnFrom {
  type: string;
  from: string;
}

export interface IReturnId {
  type: string;
  id: string;
}

export interface IReturnTo {
  type: string;
  to: string;
}
export interface IReturnIndex {
  type: string;
  index: number;
}

export interface IComponentCommunicationAction
  extends IReturnNumeric,
    IReturnItemSelected,
    IReturnText,
    IReturnPayee,
    IReturnDate,
    IReturnItemKey,
    IReturnFrom,
    IReturnTo,
    IReturnIndex,
    IReturnId {}

export function returnItemSelected(props: IComponentCommunicationAction) {
  return {
    type: ComponentCommunicationActionTypes.RETURN_ITEM_SELECTED,
    itemSelected: props.itemSelected,
  };
}

export function returnItemKey(props: IReturnItemKey) {
  return {
    type: ComponentCommunicationActionTypes.RETURN_ITEM_KEY,
    itemKey: props.itemKey,
  };
}

export function returnNumeric(props: IComponentCommunicationAction) {
  return {
    type: ComponentCommunicationActionTypes.RETURN_NUMERIC,
    number: props.number,
  };
}

export function returnText(props: IComponentCommunicationAction) {
  return {
    type: ComponentCommunicationActionTypes.RETURN_TEXT,
    text: props.text,
  };
}

export function returnDate(props: IComponentCommunicationAction) {
  return {
    type: ComponentCommunicationActionTypes.RETURN_DATE,
    date: props.date,
  };
}

export function returnPayee(props: IComponentCommunicationAction) {
  return {
    type: ComponentCommunicationActionTypes.RETURN_PAYEE,
    payee: props.payee,
  };
}

export function returnFrom(props: IReturnFrom) {
  return {
    type: ComponentCommunicationActionTypes.RETURN_FROM,
    from: props.from,
  };
}

export function returnTo(props: IReturnTo) {
  return {
    type: ComponentCommunicationActionTypes.RETURN_TO,
    to: props.to,
  };
}

export function returnID(props: IReturnId) {
  return {
    type: ComponentCommunicationActionTypes.RETURN_ID,
    id: props.id,
  };
}

export function returnIndex(props: IReturnIndex) {
  return {
    type: ComponentCommunicationActionTypes.RETURN_INDEX,
    index: props.index,
  };
}
export function clearData(props: IComponentCommunicationAction) {
  return {
    type: ComponentCommunicationActionTypes.CLEAR_DATA,
  };
}
