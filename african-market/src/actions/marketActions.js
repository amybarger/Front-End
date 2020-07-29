import axios from 'axios';

export const FETCH_MARKET_FAILURE = 'FETCH_MARKET_FAILURE';

export const fetchMarket = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_MARKET_START'}) ;
        axios
            .get('')
            .then(res => {
                dispatch({ type: 
               'FETCH_MARKET_SUCCESS',
               payload: res.data},
               console.log("Market data retrieved"))
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_MARKET_FAILURE',
                    payload: `Error ${err.response} : ${err.response}`
                })
            })
    }
}

export const itemPost = (newItem) => {
    return dispatch => {
        axios
            .post('https://build-week-app.herokuapp.com/api/items'), {
                name: newItem.name,
                description: newItem.description,
                price: newItem.price,
                location: newItem.location,
                id: Date.now()
            }
            .then(response => {console.log("Response received for items", response)
            dispatch({ type: 'ITEM_POST', payload: response.data })
            })
            .catch(err => console.log("Items not retreived from server", err))
    }
}

