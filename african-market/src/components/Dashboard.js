import React, { useState, useEffect } from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';
import { Route, useHistory } from 'react-router-dom';
import Axios from 'axios';
import ItemsCard from "./ItemsCard"
import Item from "./Items"

// import

let Dashboard = (props) => {
  // let [userItems, setUsersItems] = useState([]);
  // let [editing, setediting] = useState(false);

  // let initalValue = {
  //   name: '',
  //   description: '',
  //   price: '',
  //   location: '',
  // };

  // const [itemToEdit, setItemToEdit] = useState(initalValue);
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
