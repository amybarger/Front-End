import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMarket } from '../actions/marketActions';
import { Link, Route, useHistory } from 'react-router-dom';
import UpdateItem from "./UpdateItem";


import styled from 'styled-components'
import axios from 'axios';

const Cardholder = styled.div`
display: flex;
flex-wrap: wrap;
background-color: white;
padding: 5%;
`
const Card = styled.div `
padding:5%;
width: 30%;
margin: 0 auto;
margin-top: 5%;
padding: 1%;
border: 1px solid black`

const Item = (props) => {

  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if (refresh) {props.fetchMarket();
    setRefresh(false)}
  }, [refresh]);

  const history = useHistory();

  const handleEdit = (id) => {
    history.push(`/EditItem/${id}`)
  }

  const deleteItem = (id) => {
    axios
      .delete(`https://build-week-app.herokuapp.com/api/items/${id}`)
      .then(res => {console.log(res)})
      .catch(err => console.log(err))
      .finally(setRefresh(true))
  };

  return (
    <div>
      <div>   
        {props.item &&
          props.item.map((itemList) => {
            return (
              <Cardholder>
              <Card id={itemList.id}>
                <p className="listName">{itemList.name}</p>
                <div className="listOthers">
                <p>{itemList.description}</p>
                <p>{itemList.price}</p>
                <p>{itemList.location}</p>
                </div>
                <Route path="/update-item/:id"><UpdateItem/></Route>
                <button onClick={(() => handleEdit(itemList.id))}>Edit</button>
                <button onClick={(() => deleteItem(itemList.id))}>Delete</button>
              </Card>
              </Cardholder>
            );
          })}    
      </div>
      <p className='error'>{props.error}</p>
      <div className="alignButtons">
      <Link className="addItemButton" to ='/Additem'>Add Item</Link>
     
      </div>
    
    </div>
   );
  };
 
 const mapStateToProps = state => {
     console.log(state);
     return {
         item: state.marketReducer.market,
         error: state.marketReducer.error
     }
 }

 export default connect(
     mapStateToProps,
     { fetchMarket })
     (Item)

    //  comment