interface IAppDetails {

    categoryFrequency: string[]


}


const initialState = {
    categoryFrequency: [
        'Daily',
        'Weekly',
        'Monthly',
        'No-Limit'
    ]
};

//@ts-ignore
export function AppDetailReducer(state: IAppDetails = initialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}
