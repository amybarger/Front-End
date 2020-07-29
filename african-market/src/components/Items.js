import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMarket } from '../actions/marketActions';

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
              <div>
                <p>{itemList.name}</p>
                <p>{itemList.description}</p>
                <p>{itemList.price}</p>
                <p>{itemList.location}</p>
              </div>
            );
          })}
      </div>
      <p className='error'>{props.error}</p>
    </div>
   );
  };
 
 const mapStateToProps = state => {
     console.log(state);
     return {
         item: state.marketReducer.market
         error: state.marketReducer.error
     }
 }

 export default connect(
     mapStateToProps,
     { fetchMarket })
     (Item)



