import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMarket } from '../actions/marketActions';
import { Link } from 'react-router-dom'

import styled from 'styled-components'
// import { Link } from 'react-router-dom';

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
  useEffect(() => {
    props.fetchMarket();
  }, []);

  return (
    <div>
      <div>   
        {props.item &&
          props.item.map((itemList) => {
            return (
              <Cardholder>
              <Card>
                <p className="listName">{itemList.name}</p>
                <div className="listOthers">
                <p>{itemList.description}</p>
                <p>{itemList.price}</p>
                <p>{itemList.location}</p>
                </div>
                <button>Edit</button>
                <button>Delete</button>
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