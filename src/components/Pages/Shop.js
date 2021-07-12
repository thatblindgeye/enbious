/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import inventory from '../../scripts/inventory.json';

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    document.title = 'Shop | Enbious';
  }, []);

  useEffect(() => {
    setItems(inventory.clothing);
  }, []);

  return (
    <div>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`} className='link'>
            {item.name}
          </Link>
        </h1>
      ))}
    </div>
  );
}
