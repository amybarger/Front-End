import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const UpdateItem = (props) => {
    const [formState, setFormState] = useState({
        name: "",
        description: "",
        price: "",
        location_id: ""
    })

    const { push } = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://build-week-app.herokuapp.com/api/items/${id}`)
            .then(res => {
                console.log("Update item axios get", res)
                setFormState(res.data[0]);
            })
            .catch(err => console.log(err));
    }, [id]);
    console.log("update item formState", formState)

    const onChange = (e) => {
        setFormState({ ...formState, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .put(`https://build-week-app.herokuapp.com/api/items/${id}`, formState)
            .then(res => {
                push('/Home')
            })
    }

    return (
        <div>
            <h2>Update Item List</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    placeholder="item name"
                    value={formState.name}
                />
                <input
                    type="text"
                    name="description"
                    onChange={onChange}
                    placeholder="description"
                    value={formState.description}
                />
                <input
                    type="text"
                    name="price"
                    onChange={onChange}
                    placeholder="price"
                    value={formState.price}
                />
                <input
                    type="text"
                    name="location_id"
                    onChange={onChange}
                    placeholder="location"
                    value={formState.location_id}
                />
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default UpdateItem;

