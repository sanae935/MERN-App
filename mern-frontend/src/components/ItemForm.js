import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { name, description };

        axios.post('http://localhost:5000/api/items', newItem)
            .then(response => {
                onAdd(response.data);  // Update the parent component (e.g., ItemList)
            })
            .catch(err => {
                console.error('Failed to add item', err);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Item Name"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Item Description"
            ></textarea>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default ItemForm;