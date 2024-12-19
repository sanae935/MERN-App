import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the MERN Stack App</h1>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/create" element={<ItemForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;