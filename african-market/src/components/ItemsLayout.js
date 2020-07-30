
import React from 'react';
import styled from 'styled-components'
// import { Link } from 'react-router-dom';

const Cardholder = styled.div`
display: flex;
`
const Card = styled.div `
padding:5%;
width: 30%;
margin: 0 auto;
margin-top: 10%;
padding: 1%;
display:flex;
`
const ItemLayout = props => {
    console.log(props.item, 'insdie layout')
    // console.log(props.item.id,'Check')
    return(
        <Cardholder>
            <Card>
                <h3>{props.item.name}</h3>
              <h3>{props.item.description}</h3>
                <h3>{props.item.price}</h3>
                <h3>{props.item.location}</h3>
            </Card>
            <button onClick={() => props.deleteitems(props.items.id)}>Delete</button>
        
        </Cardholder>
    )
}
export default ItemLayout;