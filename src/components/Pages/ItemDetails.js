import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoMatch from './NoMatch';
import inventory from '../../scripts/inventory.json';

export default function ItemDetails() {
  const [item, setItem] = useState({});
  const params = useParams();

  useEffect(() => {
    setItem(inventory.clothing[params.itemId]);
  }, [params]);

  useEffect(() => {
    document.title = item ? `${item.name} | Enbious` : 'Enbious';
  }, [item]);

  return item ? <div>{item.description}</div> : <NoMatch />;
}
