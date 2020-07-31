import React, { useState, useEffect } from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';
import { Route, useHistory } from 'react-router-dom';
import Axios from 'axios';
import ItemsCard from "./ItemsCard"
import Item from "./Items"

import UpdateItem from "./UpdateItem"

// import

let Dashboard = () => {
  // let [userItems, setUsersItems] = useState([]);
  // let [editing, setediting] = useState(false);
  // let history = useHistory()

  // let itemId = JSON.parse(localStorage.getItem('itemId'))
  //       let initialValue = {
  //           name: '',
  //           description: '',
  //           price: '',
  //           location_id: '',
  //       }
  //       history.push('/Home');

  // const [itemToEdit, setItemToEdit] = useState(inital);
  // console.log(itemToEdit, 'itemToEdit');

  // useEffect(() => {
  //   Axios
  //     .get('https://build-week-app.herokuapp.com/api/items')
  //     .then((res) => {
  //     console.log(res, 'userItems');
  //     setItemToEdit(res.data);
  //   });
  // }, []);


  return (
          <div>
           <Item />
          </div>
  );
};
export default Dashboard;
