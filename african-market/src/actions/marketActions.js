import axios from 'axios';

export const FETCH_MARKET_FAILURE = 'FETCH_MARKET_FAILURE';

export const fetchMarket = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_MARKET_START'}) ;
        axios
            .get('https://build-week-app.herokuapp.com/api/items')
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
            .post('https://build-week-app.herokuapp.com/api/items', {
                name: newItem.name,
                description: newItem.description,
                price: newItem.price,
                location_id: newItem.location_id
                // id: Date.now()
            })
            .then(response => {console.log("Response received for items", response)
            dispatch({ type: 'ITEM_POST', payload: response.data })
            })
            .catch(err => console.log("Items not retreived from server", err))
    }
}

// export const itemUpdate = (editItem) => {
//     return dispatch => {
//         axios
//             .put(`https://build-week-app.herokuapp.com/api/items/${id}`, {
//                 name: editItem.name,
//                 description: editItem.description,
//                 price: editItem.price,
//                 location_id: editItem.location_id
//             })
//             .then(response => {console.log("Response received for editing items", response)
//             dispatch({ type: 'EDIT_ITEM', payload: response.data })
//         })
//         .catch(err => console.log("Can't update items", err))
//     }
// }
// comment

