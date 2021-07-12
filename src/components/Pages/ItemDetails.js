import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoMatch from './NoMatch';
import inventory from '../../scripts/inventory.json';

export default function ItemDetails() {
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  useEffect(() => {
    document.title = item ? `${item.name} | Enbious` : 'Enbious';
  }, [item]);

  useEffect(() => {
    setItem(inventory.clothing[params.itemId]);
  }, [params]);

  return item ? (
    <div>
      <h1>{item.name}</h1>
      {item.description}
    </div>
  ) : (
    <NoMatch />
  );
}
