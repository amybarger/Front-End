import React, { useState, useEffect } from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';
// import Additem from './Additem';
import {  useHistory } from 'react-router-dom';
import axios from 'axios';

import ItemsLayout from './ItemsLayout';
import UpdateItem from './UpdateItem';

let Dashboard = () => {
//   let [userItems, setUsersItems] = useState([]);
  let [editing, setEditing] = useState(false)

  let currentUserId = JSON.parse(localStorage.getItem('userId'))
  let initialValue = {
    name: '',
    description: '',
    price: '',
    location: '',
    id: '',
    user_id: currentUserId,
  };

  const history = useHistory();
  const [itemToEdit, setItemToEdit] = useState(initialValue);
  console.log(itemToEdit, 'itemToEdit');

  useEffect(() => {
    AxiosWithAuth()
    .get('api/items')
    .then((res) => {
      console.log(res, 'userItems');
      setItemToEdit(res.data.data);
    });
  }, []);


  let updateFunc = itemsId => {
    AxiosWithAuth()
      .put(`/api/items/${itemsId}`, itemToEdit)
      .then((response) => {
        setItemToEdit(response.data);
       history.push('/dashboard')
        console.log('Data has updated', response.data);
      });
  };

  let deleteItem = itemId => {
    AxiosWithAuth()
      .delete(`/api/items/${itemId}`)
      .then(res => {
        console.log(res);
        refresh();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const refresh = () => {
    window.location.reload(true);
  }

  return (
    <>
      {/* <div>
        {filteredList.map((items) => {
          return <ItemsLayout deleteItem={deleteItem} item = {items} key = {items.id} />;
        })}

      </div> */}
      {/* <button onClick={() => editing(true)}></button> */}
      {/* <div> */}

        {/* {filteredList.map((item) => {
          return <UpdateItem
              updateFunc={updateFunc}
              item={item}
              setItemToEdit={setItemToEdit}
              itemToEdit={itemToEdit}
            />
        })}
      </div> */}
     
    </>
  )
}
export default Dashboard;
