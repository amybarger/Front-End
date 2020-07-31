import React, { useState } from 'react';
import { connect } from 'react-redux';
import { itemPost } from '../actions/marketActions'; 
import { useHistory } from 'react-router-dom'

const AddItem = (props) => {

    const history = useHistory();

    const [formState, setFormState] = useState({

        name: "",
        description: "",
        price: "",
        location_id: ""    
    })

    const formSubmit = (e) => {
        e.preventDefault();
        props.itemPost(formState);
        setFormState({
        name: "",
        description: "",
        price: "",
        location_id: ""
        })

        history.push("/Home")
    }

    const inputChange = (e) => {
        setFormState({ ...formState, [e.target.name] : e.target.value})
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
            <div className="loginColors">
                <h2 className="addItemsHeader">Add Items</h2>
                <label htmlFor="name">
                    Item Name:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={inputChange}
                        required
                    />
                </label>
                <label htmlFor="description">
                    Item Details:
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={formState.description}
                        onChange={inputChange}
                        required
                    />
                </label>
                <label htmlFor="price">
                    Price:
                    <input
                        type="text"
                        name="price"
                        id="price"
                        value={formState.price}
                        onChange={inputChange}
                        required
                      />
                </label>
                <label htmlFor="location">
                    Location:
                    <input
                        type="text"
                        name="location_id"
                        id="location_id"
                        value={formState.location_id}
                        onChange={inputChange}
                        required
                        />
                </label>
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, {itemPost})(AddItem);

    

         