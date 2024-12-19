import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditItemForm = ({ itemId, onUpdate }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/api/items/${itemId}`)
            .then(response => {
                setName(response.data.name);
                setDescription(response.data.description);
            })
            .catch(err => console.error('Failed to fetch item', err));
    }, [itemId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedItem = { name, description };

        axios.put(`http://localhost:5000/api/items/${itemId}`, updatedItem)
            .then(response => {
                onUpdate(response.data);  // Update the parent component
            })
            .catch(err => console.error('Failed to update item', err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit">Update Item</button>
        </form>
    );
};

export default EditItemForm;