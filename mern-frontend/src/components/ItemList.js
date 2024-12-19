import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/items')
            .then(response => {
                setItems(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch items');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}
 <button onClick={() => handleDelete(item.id)}>Delete</button>                   
                    
                    
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;