const initialState = {
    market: '',
    isFetching: false,
    error: ''
};

export const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MARKET_START' :
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_MARKET_SUCCESS' :
            return {
                ...state,
                isFetching: false,
                market: action.payload,
                error: ''
            }
        case 'FETCH_MARKET_FAILURE' :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case 'ITEM_POST' :
            return {
                ...state,
                market: action.payload,
                isFetching: false,
                error: ''
            }
        // case 'EDIT_ITEM' :
        //     return {
        //         ...state,
        //         market: action.payload,
        //         isFetching: false,
        //         error: ''
        //     }
        default:
            return state;    
        
    }
}