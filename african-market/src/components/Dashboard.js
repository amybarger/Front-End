import React, { useState, useEffect } from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';
import { Route, useHistory } from 'react-router-dom';
import Axios from 'axios';

// import

let Dashboard = () => {
  let [userItmes, setUsersItems] = useState([]);
  let [editing, setediting] = useState(false);

  let currentUserId = JSON.parse(localStorage.getItem('userId'));
  let initalValue = {
    name: '',
    description: '',
    price: '',
    location: '',
    // id: '',
    user_id: currentUserId,
  };
  const { push } = useHistory();
  const [itemToEdit, setItemToEdit] = useState(initialValue);
  console.log(itemToEdit, 'itemToEdit');

  useEffect(() => {
    axios.get('https://build-week-app.herokuapp.com/api/items').then((res) => {
      console.log(res, 'userItmes');
      setUsersItems(res.data.data);
    });
  }, []);

  let filteredList = userItems.filter(
    (projects) => items.user_id === currentUserId
  );

  let updatFunc = (itemId) => {
    AxiosWithAuth()
      .put(`/api/items/${itemId}`, itemToEdit)
      .then((response) => {
        setItemToEdit(response.data);
        push('/dashboard');
        console.log('Data has updated', response.data);
      });
  };

  let deleteItem = (ItemId) => {
    AxiosWithAuth()
      .delete(`/api/items/${itemId}`)
      .then((res) => {
        console.log(res);
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const refresh = () => {
    window.location.reload(true);
  };

  return (
    <>
      <div>
        {filteredList.map((projects) => {
          return (
            <ItemLayout deleteItem={deleteItem} item={items} key={items.id} />
          );
        })}
      </div>
      <button onClick={() => editing(true)}></button>
      <div>
        {filteredList.map((itmes) => {
          return (
            <UpdateItem
              updateFunc={updateFunc}
              items={item}
              setItemToEdit={setItemToEdit}
              itemToEdit={itemToEdit}
            />
          );
        })}
      </div>
      <Additem />
    </>
  );
};
export default Dashboard;
