// import React, { useState } from 'react';
// import { AxiosWithAuth } from '../utils/AxiosWithAuth';
// import { useHistory } from 'react-router-dom';

// const UpdateItem = props => {
//     const { items, getUpdateitems } = useState(initial);

//     console.log(props, 'updateitem')
//     let {itemToEdit, setItemToEdit, item, updateFunc} = props

//     const handleSubmit = (evt) => {
//         updateFunc(item.id);
//         evt.preventDefault();
//     };

//     let handleChange = e => {
//         console.log('handleChange')
//         e.preventDefault();
//         setItemToEdit({...itemToEdit, [e.target.name]: e.target.value})
//     }

//     return(
//         <div>
//             <form onSubmit = {handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
            
//             <h3>Need to make changes?</h3>
//             <label>Item</label>
//             <input type = 'text'
//             name= 'name'
//             placeholder = {item.name}
//             onChange = {handleChange}
//             value = {itemToEdit.name}
//             />
            
//             <label>Description</label>
//             <input type = 'text'
//             name =  'description'
//             placeholder = {item.description}
//             onChange = {handleChange}
//             value = {itemToEdit.description}
//             />
            
//             <label>Price</label>
//             <input type = 'number'
//             name =  'price'
//             placeholder = {item.price}
//             onChange = {handleChange}
//             value = {itemToEdit.price}
//             />

//             <label>Location</label>
//             <input type = 'location_id'
//             name =  'location'
//             placeholder = {item.location}
//             onChange = {handleChange}
//             value = {itemToEdit.location}
//             />

//             <label>Id</label>
//             <input type = 'id'
//             name =  'id'
//             placeholder = {item.id}
//             onChange = {handleChange}
//             value = {itemToEdit.id}
//             />

//             <button> Submit for changes </button>
            
//             </form>

//         </div>
//     )
// }
// export default UpdateItem