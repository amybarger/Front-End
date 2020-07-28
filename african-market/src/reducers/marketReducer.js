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
        
    }
}