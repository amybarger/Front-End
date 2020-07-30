import React from 'react';

export default function ItemsCard(props) {
    
    const { name, description, price, location } = props
    
    return (
        <div className='card'> 
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <p>{location}</p>
          </div>
    )
}