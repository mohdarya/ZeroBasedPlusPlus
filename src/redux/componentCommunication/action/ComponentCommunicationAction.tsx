export enum ComponentCommunicationActionTypes {
    RETURN_ITEM_SELECTED = 'RETURN_ITEM_SELECTED',
    RETURN_NUMERIC = 'RETURN_NUMERIC',
    RETURN_TEXT = 'RETURN_TEXT',
    RETURN_DATE = 'RETURN_DATE',
    RETURN_PAYEE = 'RETURN_PAYEE',
    CLEAR_DATA = 'CLEAR_DATA'
}

interface IReturnItemSelected {
    type: string,
    itemSelected: string
}

interface IReturnNumeric {
    type: string,
    number: number
}


interface IReturnText {
    type: string,
    text: string
}

interface IReturnPayee {
    type: string,
    payee: string,

}

interface IReturnDate {
    type: string,
    date: string
}


export interface IComponentCommunicationAction extends IReturnNumeric, IReturnItemSelected, IReturnText, IReturnPayee, IReturnDate{

}

export function returnItemSelected(props: IComponentCommunicationAction) {
    return {
        type: ComponentCommunicationActionTypes.RETURN_ITEM_SELECTED,
        itemSelected: props.itemSelected,
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

export function clearData(props: IComponentCommunicationAction) {
    return {
        type: ComponentCommunicationActionTypes.CLEAR_DATA,
    };
}
