import React, { useState, useEffect } from 'react';
import NoMatch from './NoMatch';
import inventory from '../../scripts/inventory.json';

export default function ItemDetails({ match }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(inventory.clothing[match.params.id]);
  }, [match]);

  useEffect(() => {
    document.title = item ? `${item.name} | Enbious` : 'Enbious';
  }, [item]);

  return item ? <div>{item.description}</div> : <NoMatch />;
}
